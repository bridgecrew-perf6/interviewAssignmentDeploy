import {createSlice} from '@reduxjs/toolkit';

const DUMMY=[
    {
      "id": 1641922648971,
      "edit": false,
      "title": "test567",
      "date": "Tue Jan 11 2022 23:07:28 GMT+0530 (India Standard Time)"
    },
    {
      "id": 1641921446851,
      "edit": false,
      "title": "test44512",
      "date": "Tue Jan 11 2022 22:47:26 GMT+0530 (India Standard Time)"
    },
    {
      "id": 1641922653456,
      "edit": false,
      "title": "test342",
      "date": "Tue Jan 11 2022 23:07:33 GMT+0530 (India Standard Time)"
    },
    {
      "id": 1641924835993,
      "edit": false,
      "title": "test300",
      "date": "Tue Jan 11 2022 23:43:55 GMT+0530 (India Standard Time)"
    },
    {
      "id": 1642251714926,
      "edit": false,
      "title": "test23",
      "date": "Sat Jan 15 2022 18:31:54 GMT+0530 (India Standard Time)"
    }
  ]
const initalState={
    todos:DUMMY,
    filterTodos:[],
    addNew:false,
    currentPage:1,
    itemPerPage:3,
    totalRecords:0,
    totalPages:0
}

const todoSlice=createSlice({
    name:'todo',
    initialState:initalState,
    reducers:{
        // addNewAction(state,action){
        //     let id=Date.now();
        //     state.todos.push({id,edit:false,...action.payload});
        // },
        // deleteAction(state,action){
        //     state.todos=state.todos.filter(data=>data.id!==action.payload)
        // },
        // editAction(state,action){
        //     const newTodos=state.todos.map(data=>{
        //         data.edit=false;
        //         if(data.id===id){
        //             data.edit=true;
        //         }
        //         return data;
        //     });
        // },
        getFilterData(state,action){
            console.log(state.itemPerPage);
            console.log("payload",action.payload.itemPer)
            if(state.itemPerPage!==action.payload.itemPer){
              state.currentPage=1;
            }
            state.itemPerPage=action.payload.itemPer;          
            state.totalRecords=state.todos.length;
            state.totalPages= Math.ceil(state.totalRecords/state.itemPerPage);
            let result="";
            if(action.payload.search){
              state.currentPage=1;
              result=state.todos.filter(info=>info.title.toLowerCase().includes(action.payload.search.toLowerCase()))
              state.totalRecords=result.length;
            }
            let start=0;
            if(state.currentPage!=1){
              start=(state.itemPerPage*state.currentPage)-state.itemPerPage;
            }
            if(action.payload.search){
              state.filterTodos=result.slice(start,start+state.itemPerPage);
            }else{
              state.filterTodos=state.todos.slice(start,start+state.itemPerPage);
            }
          },
        sortData(state,action){
            state.filterTodos=state.todos.sort((a,b)=>{
                if(action.payload.sortOrder==='asc'){
                    return a[action.payload.sortBy]<b[action.payload.sortBy]?1:-1;
                }
                return a[action.payload.sortBy]>b[action.payload.sortBy]?1:-1;
            });
            state.filterTodos=state.todos.slice(0, state.itemPerPage);
        },
        changePage(state,action){
          state.currentPage=action.payload;
          let start=0;
            if(state.currentPage!=1){
              start=(state.itemPerPage*state.currentPage)-state.itemPerPage;
            }
            
            state.filterTodos=state.todos.slice(start,start+state.itemPerPage);
        }

    }
});

export const todoActions=todoSlice.actions;
export default todoSlice;