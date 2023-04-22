import React, { useState } from 'react'
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import axios from "axios"

const useLogin = () => {
    const { handleSubmit, register, reset, formState: { errors } } = useForm()
    const [ErrorLogin, setErrorLogin] = useState(false)
    const [notCredential, setNotCredential] = useState(false);
    const [load, setload] = useState(false)

    const navigate =useNavigate()
    
    const submit = datos =>{
        setload(true)
        const url ="https://e-commerce-api-v2.academlo.tech/api/v1/users/login"
        axios.post(url,datos)
        .then(({data})=>{
            localStorage.setItem("token",data.token)
            localStorage.setItem("dataUser",JSON.stringify(data.user))
            navigate('/')
        })
        .catch(err=>{
            if(err.response.status==401){
                setNotCredential(true)
                setTimeout(() => {
                  setNotCredential(false)
                  }, 3000);
              }else{
                setErrorLogin(true)
                setTimeout(() => {
                  setErrorLogin(false)
                  }, 3000);
              } 
            })
            .finally(fin =>{setload(false)})
            reset({
                email:'',
                password:''
            })
    }

    return {submit,ErrorLogin,handleSubmit,register,reset,errors,notCredential,load}
}

export default useLogin