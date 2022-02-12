import { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { todoActions } from "../store/todoSlice";

const SearchAndSort=({todos})=>{
    const [searchInput,setSearchInput]=useState('');
    const [activeSort,setActiveSort]=useState(3);
    const dispatch=useDispatch();

    const sortEvent=(sortBy,sortOrder,select)=>{
        dispatch(todoActions.sortData({sortBy,sortOrder}));
        setActiveSort(select);
    }
    
    
    return (<div className='search_sort_section'>
        <Form.Control type="text" id="searchInput"  placeholder="Seach Task" 
            onChange={(e)=>dispatch(todoActions.getFilterData({search:e.target.value}))}  autoComplete="off" />
            {searchInput.length===0 && (<>
            <button className={`btn btn-sm ${activeSort===2?'btn-success':'btn-dark'}`} 
                onClick={()=>sortEvent('title','asc',2)} >Task Asc</button>
            <button className={`btn btn-sm ${activeSort===1?'btn-success':'btn-dark'}`} 
                onClick={()=>sortEvent('title','desc',1)}>Task Desc</button>
            <button className={`btn btn-sm ${activeSort===4?'btn-success':'btn-dark'}`} 
                onClick={()=>sortEvent('date','asc',4)}
            >Date Asc</button></>)}
            <button className={`btn btn-sm ${activeSort===3?'btn-success':'btn-dark'}`} 
                onClick={()=>sortEvent('date','desc',3)}
            >Date Desc</button>
            
            
            <select type="text" id="searchInput" className="form-control" onChange={(e)=>dispatch(todoActions.getFilterData(e.target.value))}  >
                <option key='1' value="3">Choose ItemPerPage (default 3)</option>   
                <option key='2' value="5">5</option>   
            </select>
    </div>);
}
export default SearchAndSort;