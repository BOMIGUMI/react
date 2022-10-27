import logo from './logo.svg';
import './App.css';
import Item1 from './compo/Item1';
import Item2 from './compo/Item2';
import Item3 from './compo/Item3';
import {useState} from 'react';

// Redux 재료 준비
// 상태값들(state)을 저장시키는 역할인 store만들기
import { createStore } from 'redux';
// Provider : App.jd 에서 만들어진 store 안의 state 값을 어떤 컴포넌트와 공유, 제공 할것인지를 정의!
import { Provider } from 'react-redux'; 
import Right1 from './compo/Right1';

//  reducer : store에 접근해서 state에 관련된 작업을 처리할 기능
// --> 현재의 상태값과 작업(action)을 필요로하는 기능
function reducer(currentState, action){
  // currentState===undefined : reducer가 처음 store에 적용될때 (currentState가 정의되지 않았을 때) default 상태값을 만드는 부분
  if(currentState===undefined){   // 현재 상태가 undefine일때 number : 1을(기본state) 반환 -> sotre에 같이 적용되어 다른 컴포넌트에서도 접근가능
    return{
      number : 1    // -> 다른 컴포넌트에서 사용가능한 기본 상태값(state값)
    };
  }

  // currentState가 undefined가 아니고 다른 상태값에 따른 명령이 들어오면
  // --> return {...currentState}; (밑)에서 처리가능
  if(action.type=='plus'){    // 전달된 메세지가 plus 일때 currentState.number++;실행
    currentState.number++;
  }
  else if (action.type=='name'){  // 다른 컴포넌트에서 name을 action 해주면 아래의 새보미가 추가됨
    currentState.name="새보미";
  }


  return {...currentState};   // ... :  객체에 대한 모든정보를 전부 꺼내 return해줌

}

// state값을 저장시킬 저장소 생성 redecer -> store값을 변경.
const store = createStore(reducer);

function App() {

  const [number, setNumber] = useState(3);

  return (
    <div id="container">
      <h1>Root : {number}</h1>
      <div id="grid">
      <Provider store={store}>
        {/* 
          위에서 만든 store와 연결 시키고 해당내용을 
          하위 컴포넌트(Item1)에 제공하겠다! (접근을 가능하게 만들겠다)
          하위 컴포넌트가 사용하고 있는 다른 컴포넌트에도 store를 제공할 수 있음!
        */}
        <Item1 num = {number}></Item1>    {/* num = {number} : Item1의num이라는 속성에 number를 담아줌 */}
        <Right1></Right1>
      </Provider>
      </div>
    </div>
  );
}

export default App;
