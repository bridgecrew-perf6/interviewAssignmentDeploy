import { sendRequest } from "./SendRequest";

const PaginationComponent = ({total,changePage,currentPage})=>{
    console.log(total);
    let pagesArr=[];
    for(let i=1;i<=total;i++){
        pagesArr.push(i);
    }

    const ChangeEvent=(pageNo)=>{
        sendRequest('')
        changePage(pageNo);
    }

    return <div className="text-center">
        <ul className="pagication_display"> 
            {pagesArr.map((page,index)=>{
                if(currentPage===page){
                    return <li key={index} className="active" onClick={()=>ChangeEvent(page)} >{page}</li>
                }else{
                    return <li key={index} onClick={()=>ChangeEvent(page)} >{page}</li>
                }
            })}
        </ul>
    </div>
}
export default PaginationComponent;