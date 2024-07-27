# [1주차 주말 과제] 아토믹 컴포넌트 만들기

## 과제 내용
### 아토믹 컴포넌트 구현
Figma 컴포넌트 → React 컴포넌트 구현이 과제입니다.

- 바닐라 프로젝트 결과물에서 구현할 컴포넌트를 1개 선정합니다.
- Figma를 사용해 선정한 컴포넌트 정의 및 변형을 설계합니다.
- 디자인된 컴포넌트를 React 컴포넌트로 구현합니다.
쉽게 말해 바닐라 프로젝트 결과물에 사용된 컴포넌트를 하나 선정하여
Figma 컴포넌트 → React 컴포넌트로 설계하는 것이 과제입니다.

### 수행 조건
과제는 아래 조건을 충족해야 합니다.

- 모두가 접근 가능
- 의미있는 구조 설계
- 체계적인 표현 설계

### 제출 방법
본 과제의 목적은 완성이 아닙니다.
어느 정도까지 결과 수행이 가능한 지 확인하는 것입니다.
그러니 진행된 부분까지만 수행 결과를 제출합니다.

- 유의미한 설계 경험을 가지길 바랍니다. (Figma 디자인 / React 개발)
- 과제 수행 GitHub 저장소에 코드를 푸시합니다. (Figma 디자인 URL 포함)
- 과제 수행(난관, 극복 등) 과정을 README.md 파일에 기록하세요.
- 과제를 수행한 저장소 URL을 [과제 수행](https://github.com/yamoo9/likelion-10th/discussions/categories/z-%EA%B3%BC%EC%A0%9C-%EC%88%98%ED%96%89) 채널에 남깁니다.

## 과제 수행

### 컴포넌트 구현 대상
바닐라프로젝트 13조 Enter EUID의 거래 상세페이지 -> 판매자 프로필 정보

<img width="400px" src="https://github.com/user-attachments/assets/cbb7cf4a-1fbc-42dd-a098-cd9b2f7de65c">


### 컴포넌트 설계
- 매너온도를 나타내는 부분 (35도, 40도를 기준으로 색상과 아이콘 변경) <br/>
  <img width="500px" alt="스크린샷 2024-07-28 오전 4 02 46" src="https://github.com/user-attachments/assets/96b791a1-b22a-4d6a-9b0c-03b9584afe6c" />


- 판매자 프로필 정보 (왼쪽의 사진 및 정보 + 오른쪽의 매너온도) <br/>
  <img width="500px" alt="스크린샷 2024-07-28 오전 4 01 58" src="https://github.com/user-attachments/assets/7edcf19a-3e65-41c0-a843-bd8c8f3a3d3d" />

<br/>

[컴포넌트 설계 피그마 링크](https://www.figma.com/design/pZAoSiGyn01TyoZjUV2YTA/%5B1%EC%A3%BC%EC%B0%A8-%EC%A3%BC%EB%A7%90-%EA%B3%BC%EC%A0%9C%5D-%EC%95%84%ED%86%A0%EB%AF%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0?node-id=0-1&t=pR6DJwc3rpNQqb0O-1)

### 구현 방식
- JSX가 아닌 Low Level의 React.createElement를 사용
- MannerTemperature 컴포넌트를 만든 후 ProfileInfo 컴포넌트에서 import해서 사용
- ProfileInfo 컴포넌트를 사용한 3가지 예시를 ProfileInfoPage 페이지에 보여줌
<img width="800" src="https://github.com/user-attachments/assets/15aa62a5-cb0e-4121-84fa-079f2f2c4e0a">
