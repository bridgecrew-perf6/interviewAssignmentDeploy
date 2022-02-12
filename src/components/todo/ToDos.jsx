import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { todoActions } from "../store/todoSlice";
import { getTodo } from "./getTodo";
import UiModal from "./new/UIModel";
import PaginationComponent from "./Pagination";
import SearchAndSort from "./SearchAndSort";
import TodoDetail from "./todoDetail";

const ToDos = ()=>{
    const todos=useSelector(state=>state.task.filterTodos);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(todoActions.getFilterData({itemPer:3}));
    },[]);
    console.log(todos);
    return (<>
    <main className='my-3'>
        <Row>
            <Col>
                {/* <UiModal addEvent={addNewHandler}/> */}
                
                <hr />
                {todos.length?
                <div className='task-list'>
                    <h5 className="text-center">Task List</h5>
                    <SearchAndSort  todos={todos} />
                    <ul>
                        {todos.map((todo)=>{
                            return <TodoDetail  todo={todo} key={todo.id}  />
                        })}
                    </ul>
                </div>
                :
                <div className='empty text-center'>No Task.</div>}
            </Col>
        </Row>
    </main>
    <footer>
        <PaginationComponent  />
    </footer>
    </>);
}
export default ToDos