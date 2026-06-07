// sw.js
self.addEventListener('push', function(event) {
  const options = {
    body: event.data ? event.data.text() : 'Cảnh báo từ hệ thống ICAR!',
    icon: '/icon.png', // Hãy thay bằng icon của bạn
    badge: '/badge.png'
  };

  event.waitUntil(
    self.registration.showNotification('ICAR Safety Alert', options)
  );
});
