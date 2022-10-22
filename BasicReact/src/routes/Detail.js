import { useEffect, useState } from "react"
import{Link, useParams} from "react-router-dom"

function Detail () {
    const [loading, setLoding] = useState(true)
    const [detail , setDetail] = useState([])
    const key = "3901b383ce0253c398bc55ee0aeabc5e"
    const {id} = useParams()

    useEffect(()=>{fetch(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${key}&movieCd=${id}`)
                    .then((response)=> response.json())
                    .then((data)=> {
                         setDetail(data.movieInfoResult.movieInfo) 
                         setLoding(false)}) 
                    },[])
                    
    console.log(detail)
    
    const lis = [{0:"a"},{1:"b"},{2:"c"}]
     

    return <div>
        <h1>Details</h1>
        {loading ? <div>loading .....</div> : <ol>
            <li>영화코드 : {detail.movieCd}</li>
            <li>영화이름 : {detail.movieNm}</li>
            <li>영화영어이름 : {detail.movieNmEn}</li>
            <li>영화장르 : 
                <ul>
                {detail.genres.map((g)=>(<li key={g.genreNm}>{g.genreNm}</li>))}
                </ul>
            </li>
            
        </ol>}
        <button onClick={()=> window.history.back()}>뒤로가기</button>
        <Link to={"/"} ><button>홈</button> </Link>
    </div>
}

export default Detail