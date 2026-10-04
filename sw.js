const CACHE_NAME = 'on-thi-thpt-v1.2';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  'index.html',
  './lichsu.js',
  './vatli.js',
  './tienganh.js',
  './bg.jpg',
  './manifest.json',
  'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js'
];

// Cài đặt Service Worker và lưu trữ sẵn dữ liệu cần thiết để chạy Offline
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Đang lưu trữ tài nguyên để chạy Offline...');
      // Dùng Promise.all riêng lẻ để nếu có 1 file bị lỗi thì các file còn lại vẫn được lưu vào Cache 100%
      return Promise.all(
        ASSETS_TO_CACHE.map((url) => {
          return fetch(url)
            .then((res) => {
              if (res.ok) {
                return cache.put(url, res);
              }
              console.warn('[Service Worker] Bỏ qua tài nguyên không tìm thấy:', url, res.status);
            })
            .catch((err) => {
              console.warn('[Service Worker] Lỗi tải tài nguyên vào cache:', url, err);
            });
        })
      );
    })
  );
});

// Kích hoạt Service Worker và dọn dẹp cache cũ
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Đang dọn dẹp cache cũ:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Chiến lược phục vụ dữ liệu: Tối ưu 100% khi MẤT MẠNG / TẮT WIFI (Offline)
self.addEventListener('fetch', (event) => {
  const req = event.request;
  
  // Bỏ qua các yêu cầu không phải GET hoặc yêu cầu đến Firebase Realtime DB
  if (req.method !== 'GET' || req.url.includes('firebaseio.com') || req.url.includes('firestore')) {
    return;
  }

  // 1. Khi mở trang web chính (navigation request: mở link, tải lại trang)
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, responseToCache));
          }
          return networkResponse;
        })
        .catch(() => {
          // KHI TẮT MẠNG / KHÔNG CÓ WIFI:
          // Trả về ngay lập tức trang index.html từ cache để ứng dụng hoạt động bình thường!
          return caches.match('./index.html')
            .then((res) => res || caches.match('/index.html'))
            .then((res) => res || caches.match('index.html'))
            .then((res) => res || caches.match('./'));
        })
    );
    return;
  }

  // 2. Với các file tĩnh (js, css, ảnh, fonts, v.v.): Cache First (Ưu tiên đọc cache cực nhanh)
  event.respondWith(
    caches.match(req).then((cachedResponse) => {
      if (cachedResponse) {
        // Có trong cache -> trả về ngay lập tức
        // Nếu có mạng thì cập nhật ngầm trong nền
        fetch(req).then((netRes) => {
          if (netRes && netRes.status === 200) {
            const resClone = netRes.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
          }
        }).catch(() => {});
        return cachedResponse;
      }

      // Chưa có trong cache -> tải từ mạng và tự động lưu vào cache cho lần offline sau
      return fetch(req).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const resClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
        }
        return networkResponse;
      });
    })
  );
});
