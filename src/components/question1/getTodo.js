export const getTodo=()=>{
    let localData=localStorage.getItem('tasks');
    localData?localData=JSON.parse(localData):localData=[];
    if(localData.length>0){
        localData.forEach(element => element.edit=false);
    }
    return localData;
}