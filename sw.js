const CACHE_NAME = 'on-thi-thpt-v1.1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './lichsu.js',
  './vatli.js',
  './tienganh.js',
  './data/lichsu.js',
  './data/vatli.js',
  './data/tienganh.js',
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
      return cache.addAll(ASSETS_TO_CACHE).catch(err => {
        console.warn('[Service Worker] Một số tài nguyên ngoài có thể chưa nạp vào cache:', err);
      });
    })
  );
});

// Kích hoạt Service Worker và xóa cache phiên bản cũ
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

// Chiến lược Stale-While-Revalidate: Luôn mở cực nhanh và chạy được 100% khi MẤT MẠNG / OFFLINE
self.addEventListener('fetch', (event) => {
  const req = event.request;
  
  // Bỏ qua các yêu cầu không phải GET hoặc yêu cầu đến Firebase Realtime DB
  if (req.method !== 'GET' || req.url.includes('firebaseio.com') || req.url.includes('firestore')) {
    return;
  }

  event.respondWith(
    caches.match(req).then((cachedResponse) => {
      // 1. Nếu có trong cache, trả về ngay (kể cả khi không có mạng)
      const fetchPromise = fetch(req).then((networkResponse) => {
        // Cập nhật lại cache nền nếu lấy mạng thành công
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(req, responseToCache);
          });
        }
        return networkResponse;
      }).catch((err) => {
        // Nếu mất mạng và không có trong cache cho trang chính, trả về trang index.html
        if (req.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });

      return cachedResponse || fetchPromise;
    })
  );
});
