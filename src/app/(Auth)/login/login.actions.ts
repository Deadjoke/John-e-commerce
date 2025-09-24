// what ever this use server lies it makes its scope Server Action 
'use server'

import { cookies } from "next/headers";
import { loginFormType } from "./login.types";

 export async function handleLogin(data:loginFormType){

      const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signin',{
        method:'post',
        body:JSON.stringify(data),
        headers:{'content-Type' : 'application/json'},
      });
      const registerResponse = await res.json();
      if (registerResponse.message === 'success') {

        const Cookie = await cookies();
        Cookie.set('user-token',registerResponse.token,{
            httpOnly:true,
            sameSite:'strict',
            maxAge: 60*60*24*7
        })
        return true;
      }else{
        return registerResponse.message;
      }
      
    }
