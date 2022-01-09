import { useEffect, useState } from "react"
import { Col, Row, Spinner, Table } from "react-bootstrap"
import Display from "./Display";
import PaginationComponent from "./Pagination";
import { sendRequest } from "./SendRequest";


const FetchUsers = ()=>{
    const [totalPages,setTotalPages]=useState(0);
    const [users,setUsers]=useState([]);
    const [currentPage,setCurrentPage]=useState(1);
    const [isLoading,setIsLoading]=useState(false);
    useEffect(()=>{
        setIsLoading(true);
        sendRequest(`https://reqres.in/api/users?page=1`).then((result)=>{
            if(result.status){
                setTotalPages(result.data.total_pages)
                setUsers(result.data.data);
                setIsLoading(false);
            }else{
                alert('Something went wrong')
                
            }
        })
    },[]);

    const changeCurrentPageHandler=async (pageNo)=>{
        setIsLoading(true);
        sendRequest(`https://reqres.in/api/users?page=${pageNo}`).then((result)=>{
            if(result.status){
                setTotalPages(result.data.total_pages)
                setUsers(result.data.data);
                setCurrentPage(pageNo);
                setIsLoading(false);
            }else{
                alert('Something went wrong')
            }
        })
        
    }

    return <Row>
        <Col>
            <h3 className="text-center text-dark">Q2 (Fetch Users)</h3>
            
            {isLoading && <div className='text-center'>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>}
            
            {!isLoading && users.length>0 && <Table hover>
                <thead>
                    <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user=>{
                        return <Display key={user.id} record={user} />
                    })}
                </tbody>
            </Table>}
            
            {!isLoading && users.length===0 && <p className="text-center">No record found</p>}
            
            {!isLoading && <PaginationComponent currentPage={currentPage} changePage={changeCurrentPageHandler} total={totalPages}/>}
        </Col>
    </Row>
}
export default FetchUsers;