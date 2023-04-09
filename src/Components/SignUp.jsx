import React from 'react'
import useSignUp from '../Hooks/useSignUp'
import Loader from './Loader'
import Created from './Created'
import { NavLink } from 'react-router-dom'

const SignUp = () => {
 const {submit,handleSubmit,register,errors,userCreate,Error,userExist,load} =useSignUp()
  return (
    <>
    {
      load
      ?
      <Loader/>
      :
      userCreate
      ?
      <Created/>
      :
    <div className="block w-96 rounded-lg bg-white px-6 shadow-lg dark:bg-neutral-700 py-8">
     <div className="w-5/6 m-auto flex justify-start gap-4 mb-5">
        <h3 className="text-2xl text-justify font-semibold text-gray-800">Sign Up</h3>
     </div>
     <form className="flex flex-col gap-4" onSubmit={handleSubmit(submit)}>
        <ul className="flex flex-col gap-4 items-center text-gray-800">
         <li className="w-5/6">
            <label htmlFor="form-firstName" className="block text-gray-700 font-bold">First Name</label>
            <input autoComplete='off' type="text" id="form-firstName" name="firstName" placeholder="Your first Name" className="border w-full rounded py-2 px-3 leading-4 focus:outline-none focus:border-blue-500 shadow-inner text-sm" {...register('firstName', {
                required: {
                  value: true,
                  message: "Campo requerido"
                },
                pattern: {
                  value: /[A-Za-z]$/i,
                  message: "Formato incorrecto, solo caracteres (A-Z)."
                },minLength:{
                    value:3,
                    message:'Nombre muy corto'
                },
                maxLength:{
                    value:10,
                    message:'Nombre muy largo'
                }
                })} />
                {errors.firstName && <span className='text-xs text-red-700'>{errors.firstName.message}</span>}
         </li>
         <li className="w-5/6">
            <label htmlFor="for-lastName" className="block text-gray-700 font-bold">Last Name</label>
            <input autoComplete='off' type="text" id="for-lastName" name="lastName" placeholder="Your Last Name" className="border w-full rounded py-2 px-3 leading-4  focus:outline-none focus:border-blue-500 shadow-inner text-sm" {...register('lastName', {
                required: {
                  value: true,
                  message: "Campo requerido"
                },
                pattern: {
                  value:/[A-Za-z]$/i,
                  message: "Formato incorrecto, solo caracteres (A-Z)."
                },
                minLength:{
                    value:3,
                    message:"Apellido muy corto"
                }
                ,
                maxLength:{
                    value:10,
                    message:'Apellido muy largo'
                }
                })}/>
                {errors.lastName && <span className='text-xs text-red-700'>{errors.lastName.message}</span>}
         </li>
            <li className="w-5/6">
               <label htmlFor="for-email" className="block text-gray-700 font-bold">Email</label>
               <input autoComplete='off' type="text" id="for-email" name="email" placeholder="Your Email" className="border w-full rounded py-2 px-3 leading-4  focus:outline-none focus:border-blue-500 shadow-inner text-sm" {...register('email', {
                   required: {
                    value: true,
                    message: "Campo requerido"
                    
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Formato incorrecto."
                  }
                })}/>
                {errors.email && <span className='text-xs text-red-700'>{errors.email.message}</span>}
            </li>
         <li className="w-5/6">
            <label htmlFor="for-password" className="block text-gray-700 font-bold">Password</label>
            <input autoComplete='off' type="password" id="for-password" name="password" placeholder="Your Password" className="border w-full rounded py-2 px-3 leading-4  focus:outline-none focus:border-blue-500 shadow-inner text-sm" {...register('password', {
                required: {
                  value: true,
                  message: "Campo requerido"
                },
                minLength: {
                  value: 6,
                  message: "La contraseña debe tener al menos 6 caracteres"
                }
              })}/>
              {errors.password && <span className='text-xs text-red-700'>{errors.password.message}</span>}
         </li>
         <li className="w-5/6">
            <label htmlFor="for-phone" className="block text-gray-700 font-bold">Phone (10 character)</label>
            <input autoComplete='off' type="number" id="for-phone" name="phone" placeholder="Your Phone" className="border w-full rounded py-2 px-3 leading-4  focus:outline-none focus:border-blue-500 shadow-inner text-sm" {...register('phone', {
                required: {
                  value: true,
                  message: "Campo requerido"
                },
                minLength: {
                  value: 10,
                  message: "Numero celular es muy corto"
                },
                maxLength:{
                    value:10,
                    message:"Numero celular sobrepasa los caracteres maximos"
                }
              })} />
              {errors.phone && <span className='text-xs text-red-700'>{errors.phone.message}</span>}
         </li>
        </ul>
        <div className="w-5/6 m-auto"> 
        {
          Error
          &&
          <span className="text-xs text-red-700">An error occurred, please try again later</span>
          ||
          userExist
          &&
          <span className="text-xs text-red-700">User already exists</span>
        }
        <button className="text-white rounded-md w-full font-medium bg-blue-600 py-2 hover:bg-blue-500 hover:shadow-lg">Sign Up</button>
        </div>
        <p className="text-sm text-gray-700">Don't have an account? <NavLink className="text-blue-600 font-semibold" to={'/login'}>Log in</NavLink></p>
     </form>
    </div>
    }
    </>
  )
}

export default SignUp