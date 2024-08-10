## [3주차 주말 과제] 틱택토 게임 또는 노트 앱 만들기
정규 과정 수업 시간에 함께 학습한 2가지 앱 중 하나를 선택해 만드는 것이 주말 과제입니다.

1. Note App
2. Tic Tac Toe Game

### 수행 조건
과제는 아래 조건을 충족해야 합니다.

- 과정 기록 (꼼꼼히 커밋 단계 별로 기록)
- 과정 후기 (과정을 통해 깨달은 것, 개선 점 등 기록)

### 제출 방법
본 과제의 목적은 완성이 아닙니다.
어느 정도까지 결과 수행이 가능한 지 확인하는 것입니다.
그러니 진행된 부분까지만 수행 결과를 제출합니다.

### 유의미한 설계 경험을 가지길 바랍니다.
과제 수행 GitHub 저장소에 코드를 푸시합니다.
과제 수행(난관, 극복 등) 과정을 README.md 파일에 기록하세요.
과제를 수행한 저장소 URL을 과제 수행 채널에 남깁니다.

<br />

## 과제 수행
### 프로젝트 스케폴딩
- 2주차 과제에서 사용했던 vite + react + TS 템플릿을 가져와서 사용했습니다.
- CSS module을 사용하기 위해 globals.d.ts 파일에 아래의 코드 추가
  ```ts
  // CSS Modules 사용
  declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
  }
  ```

### 구조 설계

<img width="400px" alt="스크린샷 2024-08-10 오후 10 08 19" src="https://github.com/user-attachments/assets/9c138be0-23b4-4f0f-9be5-3788e46bfa58">

- #### 컴포넌트 UI 설계
  - 상단의 **'진행상황(Status)'**, 왼 쪽의 **'게임판(Squares)'**, 오른 쪽의 **'시점(History)'** 3개의 컴포넌트로 나눌 수 있음
    - **'게임판(Squares)'** 컴포넌트는 9개의 **'칸(Square)'** 컴포넌트를 포함
    - **'시점(History)'** 컴포넌트는 **'시점 버튼(HistoryButton)'** 컴포넌트를 포함

- #### 상태 설계 (아래의 useState와 파생된 상태 변수)
  - **게임판(Squares)**
    - 각각의 칸에 어떤 말(플레이어)이 놓여있는지(or 비어있는지)
    - 게임이 끝났는지(+ 승자가 있다면 어느 칸에 색이 칠해지는지)
  - **칸(Square)**
    - 클릭할 수 있는지(말이 놓여있는지)
  - **진행상황(Status)**
    - 누가 말을 놓을 차례인지
    - 게임이 끝났는지(승자가 있음 or 무승부)
  - **시점(History)**
    - 각 시점에 게임판의 말들이 어떻게 배치되어 있었는지

- #### useState로 관리할 상태 변수
  - **최상위(Game)**
    - **gameHistory** : **'시점(History)'** 컴포넌트에서 필요한 각 시점에서의 게임판의 말 배치
    - **gameIndex** : **gameHistory** 상태에서 각 시점을 찾기 위한 인덱스
    
- #### 파생된 상태 변수
  - **게임판(Squares)**
    - **currentSquares** : gameHistory 배열에서 gameIndex를 사용해 탐색
    - **winnerInfo, isDraw** : currentSquares에서 말의 배치를 보고 확인
  - **칸(Square)**
    - **isDisabled** : currentSquares에서 해당 칸에 말이 놓여있는지 확인
  - **진행상황(Status)**
    - **currentPlayer** : gameIndex를 플레이어 수로 나눈 나머지를 통해 확인
    - **winnerInfo, isDraw** : currentSquares에서 말의 배치를 보고 확인

### 과정 후기
- TypeScript를 연습할 겸 사용해 봤는데, 한 곳을 수정하면 여러 곳에서 오류가 생겨서 수정하는 과정에서 많은 배움이 있었습니다.

- TypeScript의 전역 타입을 정의하면서 constants.ts에 있는 PLAYER 배열과 globals.d.ts의 PlayerType을 동기화하고 싶어서 globals.d.ts에 PLAYER를 import 했었는데,
  globals.d.ts가 모듈화가 되면 전역 타입을 정의하는데 문제가 발생한다는 것을 알게 되어, 모듈이 필요한 전역 타입은 globals.ts파일로 분리하여 declare global로 관리해 보았습니다.
  
- 구현을 시작할 때에도 대강 설계해봤지만, 구현이 끝난 후에 README 파일을 작성하면서 각 컴포넌트에서 어떤 상태를 관리해야 하는지 + useState로 관리가 불필요한 파생된 상태 변수를 하나하나 정리해보면서 프로젝트를 설계하는 과정이 머리 속에 정리가 된 것 같습니다.
