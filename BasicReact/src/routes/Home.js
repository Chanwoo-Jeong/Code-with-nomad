import { useEffect, useState } from "react"
import Movie from "../components/Movie";

function Home () {
    const [loding, setloding] = useState(true)
    const [movie, setMovie] = useState([])
    
    let today = new Date();
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월 => +1 하는 이유는 월이 0부터 시작하기 때문
    let date = today.getDate()-1;  // 일
    // month가 10보다 작으면 문자 '0'을 추가하는 코드
    month = month >= 10 ? month : '0' + month;
    // date가 10보다 작으면 문자'0'을 추가하는 코드 
    date = date >= 10 ? date : '0' + date;

    const key = "3901b383ce0253c398bc55ee0aeabc5e"
    let numberDate = `${year}${month}${date}`

    const getMovies = async()=> {
        const json = await (await fetch(`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${numberDate}&itemPerPage=10`)).json()

        setMovie(json.boxOfficeResult.dailyBoxOfficeList)
        setloding(false)}
        console.log(movie)

    useEffect(()=>{ 
        getMovies()
        },[])

    return (
        <div>
            <h1>MovieApp</h1>
            {loding ? <strong>loading ....</strong> : 
            <ol>
            {movie.map((item)=>{return <Movie
            key={item.rnum}
            id={item.rnum}
            movieNm={item.movieNm}
            audiAcc={item.audiAcc}
            rankInten={item.rankInten}
            movieCd={item.movieCd} />})}
            </ol>
            }
            
        </div>
    )
}

export default Home