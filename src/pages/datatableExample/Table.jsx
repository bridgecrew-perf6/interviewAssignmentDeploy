import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import DataTable from "react-data-table-component"
import {Link } from 'react-router-dom'
import { Slack, User, Settings, Database, Edit2, MoreVertical, FileText, Trash2, Archive } from 'react-feather'
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
// import { httpRequest } from "../../common/httpRequest"

const TablePage =()=>{
    const [rowCollection,setRowCollection]=useState([])
    const [filterData,setFilterData]=useState([])
    const [search,setSearch]=useState('')
    useEffect(()=>{
        const obj ={
            method:'GET',
            url:"https://jsonplaceholder.typicode.com/posts"
        }
        axios(obj).then(({data})=>{
            setRowCollection(data)
            setFilterData(data)
        })
    },[])


    // const searchData = (e)=>{
    //     setSearch(e.target.value)
    //     setFilterData(
        
    // }

    const handleButtonClick = (state) => {
        console.log('clicked');
        console.log(state.target.id);
      };

    // console.log(rowCollection)

    const data=[
        {
            id:1,
            title:'test1',
            body:'body',
            title_fr:'test1',
            body_fr:'body_fr'
        },
        {
            id:2,
            title:'test2',
            body:'body2',
            title_fr:'test1_fr',
            body_fr:'body_2fr'
        },
        {
            id:3,
            title:'test3',
            body:'body3',
            title_fr:'test3_fr',
            body_fr:'body3_fr'
        }
    ]

    const columns =[
        {       
            name:'Title',
            selector:row=>row.title,
            wrap:true,
            // cell:(row) => <span onClick={handleButtonClick} id={row.id}>{row.title}</span>,
            cell:(row) => <Link to={`/data/${row.id}`} id={row.id}>{row.title}</Link>,
            sortable:true,
            // rowClick: true,
            
        },
        {       
            name:'Body',
            selector:row=>row.body,
            cell:(row)=> <div><p>{row.body}</p><p>{row.body_fr}</p></div> ,
            wrap:true,
            sortable:true
        },
        {
            name:'Actions',
            width:'10%',
            // cell:(row) => <button onClick={handleButtonClick} id={row.id}>Action</button>,
            cell:(row) => (<UncontrolledDropdown>
                <DropdownToggle tag='div' className='btn btn-sm'>
                  <MoreVertical size={14} className='cursor-pointer' />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem
                    tag={Link}
                    to={`/apps/user/view/${row.id}`}
                    className='w-100'>
                    <FileText size={14} className='mr-50' />
                    <span className='align-middle'>Details</span>
                  </DropdownItem>
                  <DropdownItem
                    tag={Link}
                    to={`/apps/user/edit/${row.id}`}
                    className='w-100'
                    
                  >
                    <Archive size={14} className='mr-50' />
                    <span className='align-middle'>Edit</span>
                  </DropdownItem>
                  <DropdownItem className='w-100'>
                    <Trash2 size={14} className='mr-50' />
                    <span className='align-middle'>Delete</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,


            
        }
    ]

    return (<>
        <h2>Data Table Example</h2>
        <input type="text"  value={search} onChange={(e)=>setSearch(e.target.value)} />
        {rowCollection && <DataTable columns={columns} data={rowCollection.filter(obj=>{
            return Object.keys(obj).some(data=>{
                return Object.keys(obj).some((key)=> String(obj[key]).toLowerCase().includes(search.toLowerCase()))
            })
        })}  pagination selectableRows />}
        {/* <DataTable columns={columns} data={data} pagination /> */}
    </>)
}

export default TablePage;