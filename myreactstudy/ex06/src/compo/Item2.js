import Item3 from "./Item3";

function Item2 (props) {
    return(
        <div>
            <h1>Item2 : </h1>
            <Item3 ></Item3>         {/* Item3를 자식컴포넌트로 담아줌 */}
        </div>
    )
}
export default Item2;