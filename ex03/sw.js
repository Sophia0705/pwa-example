// 2. Install - 설치
self.addEventListener('install', pEvent => {
    console.log('서비스워커 설치(install)함!');
  });

// 3. Activation - 업데이트
self.addEventListener('activate', pEvent => {
console.log('서비스워커 동작(activation) 시작됨!');
});

// 4. fetch - 데이터 요청
self.addEventListener('fetch', pEvent => {
    console.log("데이터 요청(fetch)!", pEvent.request)
});