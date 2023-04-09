import React, { useState } from 'react'
import {useForm} from 'react-hook-form';
import axios from "axios"
import { NavLink,useNavigate } from 'react-router-dom'

const useSignUp = () => {
  const [userCreate, setUserCreate] = useState(false);
  const [userExist,setUserExist] =useState(false)
  const [load,setLoad] =useState()
  const navigate =useNavigate();
  const [Error, setError] = useState(false)
  const { handleSubmit, register, reset, formState: { errors } } = useForm();

  const submit =datos=>{
     const url ="https://e-commerce-api-v2.academlo.tech/api/v1/users";
     setLoad(true)
     axios.post(url, datos)
    .then(res=>{
      if(res.data.id){
        setUserCreate(true)
        setTimeout(() => {
        navigate('/login')
        }, 2500);
      }
    }
    )
    .catch(err=>{
      if(err.response.status==403){
        setUserExist(true)
        setTimeout(() => {
          setUserExist(false)
          }, 3000);
      }else{
        setError(true)
        setTimeout(() => {
          setError(false)
          }, 3000);
      } 
    })
    .finally(fin=>{
      setLoad(false)
    })
     reset({
       email:'',
       firstName:'',
       lastName:'',
       password:'',
       phone:''
      })
  }

  return {submit,handleSubmit,register,errors,userCreate,Error,userExist,load}
}

export default useSignUp