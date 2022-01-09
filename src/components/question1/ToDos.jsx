import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { getTodo } from "./getTodo";
import NewTodo from "./NewTodo";
import TodoDetail from "./todoDetail";

const ToDos = ()=>{
    const [todos,setTodos]=useState(getTodo());
    
    useEffect(()=>{
        localStorage.setItem('tasks',JSON.stringify(todos));
        console.log('vfbg')
    },[todos]);
    const addNewHandler=(todo)=>{
        let id=todos.length+1;
        console.log(id,todo);
        setTodos([{id,edit:false,...todo},...todos]);
        console.log(todos);
    }
    const deleteEvent=(id)=>{
        setTodos(todos.filter(todo=>todo.id!==id));
    }
    const updateHandler=(id,data)=>{
        if(data.trim()===''){
            deleteEvent(id)
        }else{
            const updateObj=todos.find(todo=>todo.id===id)
            console.log(updateObj)
            updateObj.title=data;
            updateObj.edit=false;
            console.log(todos);
            setTodos([...todos]);
        }
        
    }

    const editHandler=(id,cancelFlag=false)=>{
        const newTodos=todos.map(todo=>{
            todo.edit=false;
            if(todo.id===id && !cancelFlag){
                todo.edit=true;
            }
            return todo;
        });
        setTodos(newTodos);
    }
    return (<Row>
        <Col>
        <h3 className="text-center text-dark">Q1 (To DO App)</h3>
           
            <hr />
            <NewTodo addEvent={addNewHandler} />
            <hr />
            {todos.length?
            <div className='task-list'>
                <h5 className="text-center">Task List</h5>
                <ul>
                    {todos.map((todo)=>{
                        return <TodoDetail  todo={todo} key={todo.id} editHandler={editHandler} updateHandler={updateHandler} deleteEvent={deleteEvent} />
                    })}
                </ul>
            </div>
            :
            <div className='empty text-center'>No Task.</div>}
        </Col>
    </Row>);
}
export default ToDos