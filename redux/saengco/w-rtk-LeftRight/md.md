**[리덕스 툴킷 활용]**

- 리덕스에서 공식적으로 추천하는 helper 라이브러리
- redux-devtools, immerjs, redux-thunk, reselect 등의 라이브러리가 미리 포함됨
- cerateAction
  - Action creator를 만드는 함수
- createReducer
  - reducer를 만듦
- createSlice : action createor, redur 등 별도로 만들어야 하는 여러 redux 구현체를 하나의 객체로 모은 것
- createSelector : createSelector 함수를 이용해, state를 이용한 특징 데이터를 리턴하도록 함

**[리덕스 툴킷 리팩토링]**

1. Redux Toolkit을 사용하여 슬라이스를 정의합니다. 이 슬라이스에는 초기 상태와 increment 리듀서가 포함됩니다.

2. configureStore를 사용하여 Redux 스토어를 생성하고, 슬라이스에서 가져온 리듀서를 전달합니다.

3. 컴포넌트 내에서는 상태에 접근하기 위해 useSelector를 사용하고, 액션을 디스패치하기 위해 useDispatch를 사용합니다. 슬라이스에서 가져온 increment 액션 생성자를 이용하여 "+" 버튼 클릭 시 액션을 디스패치합니다. 이 리팩토링을 통해 코드가 간결해지고 유지보수가 더 쉬워집니다.
