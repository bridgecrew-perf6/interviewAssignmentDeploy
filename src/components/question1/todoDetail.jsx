import {  useState } from "react";

const TodoDetail=({todo,deleteEvent,updateHandler,editHandler})=>{
    const [updateData,setUpdateData]=useState('');


    const editEvent=(id,data)=>{
        editHandler(id)
        setUpdateData(data);
    }
    const updateEvent=(id)=>{
        console.log(updateData)
        console.log(id)
        updateHandler(id,updateData)
    }
    const deleteHandler=(id)=>{
        const flag=window.confirm('Do you want to delete?');
        if(flag) deleteEvent(id);   
    }
    const cancelEvent=(id)=>{
        editHandler(id,true)
    }
    return(
        <li  >
            {!todo.edit && <div className="title">{todo.title}</div>}
            {todo.edit && <div className="title update-input"><input type='text' className="form-control" autoFocus value={updateData} 
                onChange={(e)=>setUpdateData(e.target.value)} 
                onKeyPress={(event) => {
                    if (event.key === "Enter") {
                        updateEvent(todo.id)
                    }
                  }} 
                /> </div>}
            <div className="desc">{todo.date}</div>
            <div className="desc">
                {!todo.edit && <button className="btn btn-info btn-sm" onClick={()=>editEvent(todo.id,todo.title)}>Edit</button>}
                {!todo.edit && <button className="btn btn-danger btn-sm" onClick={()=>deleteHandler(todo.id)}>Delete</button>}
                {todo.edit && <button className="btn btn-info btn-sm" onClick={()=>updateEvent(todo.id)}>Update</button>}
                {todo.edit && <button className="btn btn-danger btn-sm" onClick={()=>cancelEvent(todo.id)}>Cancel</button>}
            </div>
            
        </li>
    );
}
export default TodoDetail;