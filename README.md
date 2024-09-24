# sije 프론트엔드 과제

## 설치 및 실행

### 의존성 패키지 설치

```shell
npm install
```

### 개발 환경 실행

```shell
npm run dev
```

### 참고 사항
vercel을 통한 배포 완료 - [sije-frontend.vercel.app](sije-frontend.vercel.app)

로컬 환경에서 테스트 시 환경 변수 필요
> 보안 상 UPSPLASH access key는 환경 변수로 메일로 별도 전달할 예정입니다.

## 과제 수행 (v1.0.0)

1. Unsplash API 등의 이미지 목록 API를 사용해 이미지 목록을 불러와주세요.

   - [x] Unsplash API 활용시, 랜덤한 이미지 30개를 내려주는 API를 활용해주세요.

2. 상단 캐러셀 기능

   - [x] API가 내려주는 첫 5개의 이미지를 슬라이드 형태로 보여주는 이미지 캐러셀을 구현합니다.
   - [x] 사용자가 왼쪽, 오른쪽 화살표 버튼을 통해 이미지를 넘길 수 있게 해주세요.
   - [x] 일정 시간이 지나면 자동으로 다음 이미지로 넘어가는 기능도 추가해주세요.
   - [x] 현재 보여지는 이미지가 몇번째 이미지인지 보여지는 도트 표시도 추가합니다.
   - [x] 캐러셀 라이브러리를 사용하지 않고 직접 구현해주세요.

3. 세로 스크롤 이미지 갤러리

   - [x] 캐러셀 아래에는 남은 25장의 이미지들을 세로 스크롤 방식으로 로드하여 표시합니다.
   - [x] 각 줄당 이미지는 3개씩 나타나게 해주시고, 총 9줄로 구현되면 됩니다.

   3. 스크롤 최하단에 닿으면 다음 30장의 랜덤 이미지를 API에서 불러와 추가해주세요.
      - [x] Upsplash API는 시간당 50회 리퀘스트 제한이 있으니, 다른 부분 진행 후에 시간이 가능하면 처리하길 권합니다.

4. 모달 창

   - [x] 갤러리의 이미지를 클릭하면 모달창을 띄워 이미지를 확대해 보여줍니다.
   - [x] 닫기 버튼을 누르거나, 모달 외의 영역을 누르면 해당 모달이 닫히게 해주세요.

5. 기타
   - [x] 캐러셀 이미지 전환시 애니메이션을 활용해 부드럽게 이미지가 전환되게 해주세요.
   - [x] 캐러셀 이미지 좌우 이동을 버튼이 아니라 드래그로도 가능하게 해주세요.
   - [x] 반응형으로 구현하여 PC, 태블릿, 모바일 어느 사이즈에서도 자연스런 UI를 구현해주세요.

## 세부 시연 영상

### 케러셀 자동 플레이

https://github.com/user-attachments/assets/396dffc4-1d0c-4f8a-a011-b2ddb2e93937

### 캐러셀 클릭 이동 및 드래그 이동

https://github.com/user-attachments/assets/48b015a4-ac2f-469f-b7d5-6eabbec98683

### 갤러리 무한 스크롤 

https://github.com/user-attachments/assets/2f7a5ebf-81e6-41e2-81b4-30107f9a69f9

### 갤러리 모달

https://github.com/user-attachments/assets/8c7b4ce1-b511-4048-8e6b-efb0b6686cea

## 반응형 

https://github.com/user-attachments/assets/e62b6b6e-17b6-48c4-924a-e7c3dcf02357



### 설치 라이브러리

```js

{
    "@types/styled-components": "^5.1.34",
    "axios": "^1.7.7",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "styled-components": "^6.1.13",
    "styled-reset": "^4.5.2"
}

```
