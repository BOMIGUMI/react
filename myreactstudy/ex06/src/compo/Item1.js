import Item2 from "./Item2";
// useSelector : 공유되고 있는 store에 접근해서 state값을 가져오는 역할
import { useSelector } from 'react-redux';

function Item1 (props){     
    // props : app.js에서 넘긴 Item1태그를 사용할 때, 속성의 키(num)값과 밸류(number)를 객체로 받아옴
    // num : number, num : 3
    const name = useSelector((state)=>state.name);

    return(
        <div>
            <h1>Item1 : {name}</h1>
            <Item2></Item2>     {/* Item2를 자식컴포넌트로 담아줌 */}
        </div>
    )
}

export default Item1;