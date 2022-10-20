import {Link} from "react-router-dom"

function Movie ({ rnum, movieNm ,audiAcc , rankInten, movieCd}) { 

    const Audience = Number(audiAcc).toLocaleString('ko-KR')

    return ( 
        <li key={rnum} style={{marginBottom:"2rem"}}>
            <Link to={`/movie/${movieCd}`} >{movieNm} </Link>
            <div>관객수 : {Audience}명</div>
            <div>전일대비 : {rankInten} {rankInten>0? "🔼" : rankInten === "0"? "⏹️" : "🔽"}</div>  
            <div>영화코드 : {movieCd}</div>
        </li>
    )

}

export default Movie