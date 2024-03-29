# Toss Bank 할 일 관리 페이지

배포 사이트: (https://todo-list-tossbank.vercel.app/#/)

## 개발 기간

- 2023.12.26 ~ 2024.01.10



## 프로젝트 소개

이 프로젝트는 가상의 Toss Bank 할 일 관리 페이지로, 해당 기업의 공식 컬러와 폰트를 활용하여 디자인되었습니다. 주요 목표는 JavaScript를 사용하여 데이터를 동적으로 처리하고 할 일과 관련된 여러 기능을 구현하는 것입니다.



## 요구사항

### ❗ 필수

- [x] 원하는 특정 기업을 하나 선정하거나 새로운 가상의 기업을 만드세요!
- [x] 해당 기업의 할 일 목록(List)이 출력되는 페이지가 있어야 합니다! (예시)`example.com/`)
- [x] 해당 기업 혹은 담당 개발자에 대한 간단한 소개 페이지가 포함돼야 합니다! (예시) `example.com/about`)
- [x] 할 일 항목(Item)을 새롭게 추가할 수 있어야 합니다!
- [x] 실제 서비스로 배포하고 외부에서 접근 가능한 링크를 추가해야 합니다! (Vercel, Netlify, AWS, GCP 등)
- [x] 각 페이지를 데스크탑과 모바일 등 다양한 디바이스 크기에 대응하는 반응형 레이아웃으로 만들어야 합니다!

### ❔ 선택

- [x] 할 일 항목을 수정할 수 있도록 만들어보세요.
- [x] 할 일 항목을 삭제할 수 있도록 만들어보세요.
- [x] 할 일 항목의 순서를 바꿀 수 있도록 만들어보세요.
- [x] 할 일을 완료하지 않은 항목과 완료한 항목을 분류해서 출력해보세요.
- [x] 할 일을 완료한 항목을 한 번에 삭제할 수 있도록 만들어보세요.
- [x] 할 일 항목의 최신 수정일을 표시해보세요.
- [x] 할 일 목록이 출력되기 전에 로딩 애니메이션이 보이도록 만들어보세요.
- [ ] 기타 동작이 완료되기 전에 로딩 애니메이션이 보이도록 만들어보세요.
- [x] 차별화가 가능하도록 프로젝트를 최대한 예쁘게 만들어보세요.
- [x] 할 일과 관련된 기타 기능도 고려해보세요.



## Todo List 화면

<img width="500" alt="image" src="https://github.com/KDT1-FE/KDT7-M2/assets/150096317/1376d262-730b-4f02-8649-f559b2ae5449">

<img width="500" alt="image" src="https://github.com/KDT1-FE/KDT7-M2/assets/150096317/770bf8c1-f965-4eea-984e-479563b3b096">



## 📌구현한 기능

### API 활용

CRUD 기능을 통해 서버와 데이터를 주고받을 수 있습니다. 항목을 추가, 조회, 수정 및 삭제할 수 있습니다.


### 마감일 추가

기업용 할 일 목록을 위해 수정일 외에도 마감일을 입력할 수 있도록 해당 기능을 추가하였습니다. 주어진 API 주소에는 마감일 항목이 별도로 없기 때문에, 작업 내용과 함께 마감일을 title 항목에 포함하여 서버로 전송할 수 있도록 구현하였습니다.

```js
const addButton = this.el.querySelector('.add')
addButton.addEventListener('click', () => {
	const taskInput = this.el.querySelector('.task-input').value
	const dateInput = this.el.querySelector('.date-input').value
	const title = taskInput + '##' + dateInput
	createTodo(title)
})
```


### 진행 상황 확인

작업의 진행 상황을 확인할 수 있는 기능을 제공합니다. 작업의 진행 상태를 쉽게 파악할 수 있습니다.

<img width="175" alt="image" src="https://github.com/KDT1-FE/KDT7-M2/assets/150096317/89e5a1e3-d97b-46d1-8dca-90d531d2d365">


### 항목 분류

진행 중인 항목과 완료된 항목을 토글 버튼을 통해 쉽게 구분하여 확인할 수 있습니다.

<img width="254" alt="image" src="https://github.com/KDT1-FE/KDT7-M2/assets/150096317/68c9161b-440b-4876-887b-9a0ae780f616">


### 드래그 앤 드롭

사용자가 각각의 할 일 항목을 드래그하여 작업 순서를 자유롭게 조정할 수 있도록 하였습니다. 작업의 우선순위를 쉽게 조절할 수 있습니다.

<img width="241" alt="image" src="https://github.com/KDT1-FE/KDT7-M2/assets/150096317/ee32ab8e-dae3-4442-9f5e-55beb7273acb">



### 최신 수정일 표시

최근 수정일을 별도로 표시하여 날짜 기록이 가능하며, 항목을 수정하면 수정일이 자동으로 업데이트 됩니다. 작업의 변경 이력을 관리할 수 있습니다.


### 로딩 애니메이션 추가

새로운 작업 내용이 업로드되는 동안 로딩 애니메이션이 표시됩니다. 사용자는 작업이 업데이트되고 있는지를 시각적으로 확인할 수 있습니다.

<img width="500" alt="image" src="https://github.com/KDT1-FE/KDT7-M2/assets/150096317/c14a7f21-cc6f-41e5-b395-d802730dac9d">

