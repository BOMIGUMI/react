import axios from 'axios'
import {useState} from 'react'

function Ex01(){
        
    const [movieArray, setMovieArray] = useState([]);       // map함수는 배열에 적용되는 함수이므로 []를써줘야함

    async function getMoivies(){      // 영화정보 담겨있음
        const url = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101";
        
        // axios : 비동기 통신 방법으로 통신을 진행하겠습니다.
        const result = await axios.get(url);      //  get 방식으로 url주소와 통신
        // async~ await 를 적지 않는다면 통신에 대한 응답값으로 객체형식이 아닌 Promise타입이 반환되어진다
        // --> 화면을 구성하는 컴포넌트들이 요청을 보낼 때 순차적으로 요청을 처리하기 위함.
        console.log(result.data.boxOfficeResult.dailyBoxOfficeList[0].movieNm);
        
        // 10개의 영화데이터 배열 -> result.data.boxOfficeResult.dailyBoxOfficeList
        
        setMovieArray(result.data.boxOfficeResult.dailyBoxOfficeList)       // 영화 배열을 상태값으로 저장
      
    }

    return(
        <>
            <h1>영화데이터 확인페이지</h1>
            <button onClick={getMoivies}>영화정보 가져오기</button>
            <table border="1">
                <tr>
                    <td>순위</td>
                    <td>제목</td>
                    <td>개봉일</td>
                </tr>
                {movieArray.map(function(movie){            // movie라는 객체를통해 순위, 제목, 개봉일 가져올 수 있음
                    return(
                        <tr>
                            <td>{movie.rank}</td>
                            <td>{movie.movieNm}</td>
                            <td>{movie.openDt}</td>
                        </tr>
                    )
                })}
            </table>
        </>
    );
}

export default Ex01;