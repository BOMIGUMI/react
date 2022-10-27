// useDispatch : store에 연결되어있는 reducer를 실행시켜주세요
import { useDispatch } from 'react-redux';

function Right2(){
    const dispatch = useDispatch();

    return(
        <div>
            <h1>Right2</h1>
            <button onClick={()=>dispatch({type: 'plus'})}>+</button>       {/* type : 'plus' -> action */}
        </div>
    )
}
export default Right2;