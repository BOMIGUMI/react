import Right2 from "./Right2";
// useDispatch : store에 연결되어있는 reducer를 실행시켜주세요ㄴ
import { useDispatch } from 'react-redux';

function Right1(){
    const dispatch = useDispatch();
    return(
        <div>
            <h1>Right1</h1>
            <button onClick={()=>dispatch({type:'name'})}>이름추가</button>
            <Right2></Right2>
        </div>
    )
}
export default Right1;