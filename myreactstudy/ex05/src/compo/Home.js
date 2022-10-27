import {useNavigate, useSearchParams} from 'react-router-dom';

function Home () {

    const [Params, setParams] = useSearchParams();

    const nick = Params.get("nick");    // Login에서 가져온 nick
    const id = Params.get('id')

    const nav = useNavigate();
    function tryLogin(){
        nav("/");
    }

    return (
        <>
            <h1>HOME</h1>
            <h1>{nick}님 환영합니다</h1>
        </>
    )
}


export default Home;