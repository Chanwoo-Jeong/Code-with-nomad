import { useState } from "react"


function Content (props) { 
        
    const changeTrue = (exist,i) =>{
        let copy = [...exist]
        if(copy[i]==false){copy[i]=true}
        else{copy[i]=false}
        props.setEdit(copy)
    }
    

    const blogContent =[]

    for(let i = 0 ; i<props.title.length; i++){
        blogContent.push(<div key={i}><hr />
        <h4><input  value={props.title[i]} disabled={!props.edit[i]}></input></h4>
        <button  onClick={()=>{changeTrue( props.edit, i)}} >수정</button>
        <div>2022/02/02</div>
        <hr/></div>)
    }

    
    return <div>{blogContent}</div>

}


function BlogList () {

    
    const [title ,  setTitle] = useState(["b여자코트추천", "a남자코트추천" , "c중성코트추천","요를레이", "코딱지" , "김문경"])
    const [edit, setEdit] = useState([false,false,false,false,false,false])

    
    const xArraye = () => {
        let xcopy = [...title]
            xcopy.sort().reverse()
            setTitle(xcopy)
            setFunc([Arraye])     
    }

    const Arraye = () => {
        let copy = [...title]
        copy.sort()
        setTitle(copy) 
        setFunc([xArraye])           
    }

    const [func, setFunc] = useState([Arraye])

    return (
        <div>
            <h1>MyBlog</h1>
            <button onClick={()=>func[0]()}>정렬(가나다)순</button>
                <Content title={title} edit={edit} setEdit={setEdit}/>
        </div>
        )      
}
export default BlogList