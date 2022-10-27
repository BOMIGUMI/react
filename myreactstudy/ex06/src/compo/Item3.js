// useSelector : 공유되고 있는 store에 접근해서 state값을 가져오는 역할
import { useSelector } from "react-redux";

function Item3(props){
    const number = useSelector((state)=> state.number); // sotre에 접근해 state를 가져오는데, state의 기본상태값인 number를 가져옴

    return(
        <div>
            <h1>Item3 : {number}</h1> {/* app.js에서 만든 return의 number : 1이 나옴 */}
        </div>
    )
}
export default Item3;