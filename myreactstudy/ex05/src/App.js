import logo from './logo.svg';

// 주소값 부여 -> Routes, Route
import {Route, Routes} from 'react-router-dom'
import './App.css';
import Join from './compo/Join';
import Login from './compo/Login';
import Home from './compo/Home';

// redux 재료 import
import {createStore} from 'redux';
import {Provider} from 'react-redux';

function reducer(currentState, action){ 
  // store에 접근해 상태값 변화시켜줌(추가 & 바뀌기)
  //현재상태값(currentState)과 컴포넌트에서 넘긴 메세지(action)필요

  // currentState 기본값 설정
  if(currentState === undefined){
    return{
      id : '',
      pw : '',
      nick : ''
    };  
  }

  // action에 있는 값(메세지)를 가져와서 state 변경 로직
  if(action.type == 'join' ){
    currentState.id = action.id;
    currentState.pw = action.pw;
    currentState.nick = action.nick

  }

  // 변경 후 반환
  return {... currentState}

}
// store를 reducer가 접근 할 수있게 만들어주기
const store = createStore(reducer);

function App() {
  return (
    <>
    <Provider store={store}> {/* join,login, home -> store에 의해 사용될 수 있음 */}

      <Routes>    {/*  Routes 라는 하나의 태그로 묶기 */}
      {/* 기본경로로 연결해주어야 화면이 띄워짐 */}
      <Route path='/' element={<Join></Join>}></Route>  
       {/* react안의 route는 전부 get방식으로만 주소값을 통해서 화면이 전환이되어짐 */}
      <Route path='/Login' element={<Login></Login>}></Route>
      <Route path='/Home' element={<Home></Home>}></Route>
      </Routes>

    </Provider>
    </>

  )
};

export default App;