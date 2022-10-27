import {useRef, useState} from 'react';
//import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
// useNavigate : 특정 주소값으로 화면을 전환 할 수 있는 역할!
import { useDispatch } from 'react-redux';

// ftore에 접근해 데이터 꺼내오기
import {useSelector} from 'react-redux';

//uesRef : 컴포넌트 안에 특정DOM(요소)를 선택할 수 있게 도와주는 기능
function Join() {

    const test = useSelector((state) => state.id)

    const useID = useRef();
    const [inputID, setInputID] = useState('');
    const [inputPW, setInputPW] = useState('');
    const [inputNick, setInputNICK] = useState('');

    

    function ID(e) {
        setInputID(e.target.value);
        // IDdata = e.target.value;
    }
    function PW(e) {
        setInputPW(e.target.value);
        // IDdata = e.target.value;
    }
    function NICK(e) {
        setInputNICK(e.target.value);
        // IDdata = e.target.value;
    }
    function click() {
        setInputID('')
        setInputPW('')
        setInputNICK('')
        //ref.current는 ref가 적용된 태그
        useID.current.focus();
        //document.getElementById("test").focus();
    }
    const nav = useNavigate();
    /* function tryJoin(){ // nav변수를 통해 화면 전환 일어나게하기
        nav("/Login?id="+inputID+"&pw="+inputPW+"&nick="+inputNick) */; // 로그인 페이지 주소값대로 화면전환 일어나기
        // ?앞은 주소값, ?뒤는 보낼 데이터, 뒤의 데이터들이 각각의 쿼리스트링으로 넘어감
        // ->  useSearchParams를 통해 쿼리스트링데이터들을 꺼내 올 수 있음
    /* } */
    
    // form : 주소값으로 이동하면서 form 태그 안에 있는 내용도 같이 전달!
    //          form태그 안의 정보들도 같이 넘어감
    const dispatch = useDispatch();
    return(
        <div>
            <h1>회원가입 페이지입니다 {test}</h1>
            <form action='/Login'> 
            ID : <input name='id' placeholder='아이디 입력' onChange={(e) => setInputID(e.target.value)} value={inputID} ref={useID}></input>
            <br></br>
            PW : <input name='pw' placeholder='비밀번호 입력' onChange={(e) => setInputPW(e.target.value)} value={inputPW}></input>
            <br></br>
            NICK : <input name='nick' placeholder='닉네임 입력' onChange={(e) => setInputNICK(e.target.value)} value={inputNick}></input>
            <br></br>
            <button type="button" onClick={()=>{
                dispatch({type:'join', id:inputID, pw: inputPW, nick:inputNick})
                nav("/Login")/* 로그인 컴포넌트에서 바로 저장된 정보를 가져와서 비교해서 로그인 */
                }}>Join</button>
            <button onClick={click} type="button">초기화</button>
            </form>
        </div>
    );
};
export default Join;