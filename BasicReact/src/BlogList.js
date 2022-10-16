import { useState } from "react"



function BlogList () {

    const titleList = ["b여자코트추천", "a남자코트추천" , "c중성코트추천","요를레이", "코딱지" , "김문경"]

    const [title ,  setTitle] = useState(titleList)

    const xArraye = () => {
        let xcopy = [...titleList]
            xcopy.sort().reverse()
            setTitle(xcopy)
            setFunc([Arraye])
           
    }

    const Arraye =()=> {
        let copy = [...titleList]
        copy.sort()
        setTitle(copy) 
        setFunc([xArraye])           
    }

    const [func, setFunc] = useState([Arraye])

    function Content (props) { 
    const tata =[]
    const [dis, setDis] = useState(false)

        for(let i = 0 ; i<props.content.length; i++){
            tata.push(<><hr/>
            <h4><input value={props.content[i]} disabled={!dis}></input></h4>
            <button onClick={()=>setDis((current)=>!current)} >수정</button>
            <div>2022/02/02</div>
            <hr/></>)
        }
        return <div>{tata}</div>
    }
   

    return <div>
        <h1>MyBlog</h1>
        <button onClick={()=>func[0]()}>정렬(가나다)순</button>

            <Content  content={title}/>

        </div>

        
}

export default BlogList