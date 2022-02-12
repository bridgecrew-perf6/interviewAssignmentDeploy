import axios from 'axios'

export const httpRequest = (obj)=>{
    axios(obj)
        .then(({data})=>{
            console.log(data)
            return {httpError:false,httpMsg:'',data}
        })
        .catch(err=>{
            return {httpError:true,httpMsg:err.message,data:{}}
        })
}