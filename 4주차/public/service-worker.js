// public/service-worker.js

self.addEventListener("install", (event) => {
  console.log("Service Worker installing.");
  // 캐시 처리 등
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activating.");
  // 캐시 정리 등
});

self.addEventListener("fetch", (event) => {
  console.log("Fetching:", event.request.url);
  // 캐시에서 응답 반환 또는 네트워크 요청 처리
});
