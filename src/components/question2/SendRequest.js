export const sendRequest = async (url)=>{
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('something went wrong');
        }
        const result=await response.json();
        return {status:true,data:result};
    }catch(err){
        return {status:false}; 
    }
}