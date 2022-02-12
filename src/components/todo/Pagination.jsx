import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { todoActions } from "../store/todoSlice";

const PaginationComponent = ()=>{
    const totalPages=useSelector(state=>state.task.totalPages);
    const currentPage=useSelector(state=>state.task.currentPage);
    const dispatch=useDispatch();
    let pagesArr=[];
    for(let i=1;i<=totalPages;i++){
        pagesArr.push(i);
    }

    const changePage=(page)=>{
        dispatch(todoActions.changePage(page))
    }

    return <div className="text-center custom-pagination">
        <ul className="pagication_display"> 
            {currentPage>1 && <li onClick={()=>changePage(currentPage-1)} >Prev</li>}
            {totalPages>1 &&  pagesArr.map((page,index)=>{
                if(currentPage===page){
                    return <li key={index} className="active" onClick={()=>changePage(page)} >{page}</li>
                }else{
                    return <li key={index} onClick={()=>changePage(page)} >{page}</li>
                }
            })}
            {currentPage<totalPages && <li onClick={()=>changePage(currentPage+1)} >Next</li>}
        </ul>
    </div>
}
export default PaginationComponent;