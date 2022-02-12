import {  useState } from "react";

const TodoDetail=({todo})=>{
    
    return(
        <li  >
            {!todo.edit && <div className="title">{todo.title}</div>}
            {/* {todo.edit && <div className="title update-input"><input type='text' className="form-control" autoFocus value={updateData} 
                onChange={(e)=>setUpdateData(e.target.value)} 
                onKeyPress={(event) => {
                    if (event.key === "Enter") {
                        updateEvent(todo.id)
                    }
                  }} 
                /> </div>} */}
            <div className="desc">{todo.date}</div>
            <div className="desc">
                {!todo.edit && <button className="btn btn-info btn-sm" >Edit</button>}
                {!todo.edit && <button className="btn btn-danger btn-sm" >Delete</button>}
                {todo.edit && <button className="btn btn-info btn-sm" >Update</button>}
                {todo.edit && <button className="btn btn-danger btn-sm" >Cancel</button>}
            </div>
            
        </li>
    );
}
export default TodoDetail;