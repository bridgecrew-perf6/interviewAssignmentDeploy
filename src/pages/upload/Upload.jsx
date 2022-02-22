import axios from "axios"
import React,{ useState } from "react"
import ReCAPTCHA from "react-google-recaptcha";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Upload  = ()=>{
    const [fileData,setFileData] =useState('')
    const [fileName,setFileName] = useState('')
    const [stringHtml,setStringHtml]=useState('<h1>Hello</h1>')
    const onChangeEvent = (e)=>{
        setFileData(e.target.files[0])
        // setFileName(e.target.files[0].name)
    }
    function onChange(value) {
        console.log("Captcha value:", value);
      }

    const submitEvent = (e)=>{
        e.preventDefault();
        const formData = new FormData()
        formData.append('image',fileData)
        formData.append('email',"test@test")


        axios.post('http://localhost:5000',formData,{
            headers:{'Content-Type':'multipart/form-data'}})
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    return <>
    <form onSubmit={submitEvent} >
        <div dangerouslySetInnerHTML={{__html: stringHtml}}></div>
        <input type='file'   onChange={onChangeEvent} />
        {/* <ReCAPTCHA
    sitekey=""
    onChange={onChange}
  /> */}
        <button type="submit">Submit</button>
    </form>
    <div>File Name: {fileName}</div>
    <EditorComponent/>
 </>   
}
export default Upload


const  EditorComponent =()=> {
        const [htmlData,setHtmlData] =useState('')
        return (
            <div className="App">
                <h2>Using CKEditor 5 build in React</h2>
                <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setHtmlData(data)
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
                <div dangerouslySetInnerHTML={{__html:htmlData}} ></div>
            </div>
        );
}

