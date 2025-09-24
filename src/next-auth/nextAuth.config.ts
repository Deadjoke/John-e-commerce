import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import {jwtDecode} from 'jwt-decode'

export const nextAuthConfig:NextAuthOptions = {
    providers:[
        //can take many providers like signin using his credentials or google that all depend on provider 
        // we will use credentials

     Credentials({
        name:"Fresh Cart",
        authorize:async function(credentials,req){
            // function that used to handle login process
            // just the function that haddle calling api instead of using server action and then put the token in cookie 
             const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signin',{
             method:'post',
             body:JSON.stringify(credentials),
             headers:{'content-Type' : 'application/json'},
            })
            const finalRes =  await res.json()
            console.log('finalresponse Authorize: ',finalRes );
            if (finalRes.message == 'success' ) {
                const {role, ...rest} = finalRes.user;
                const decodedObj:{id:string} =  jwtDecode(finalRes.token);
                
                return {
                    id:decodedObj.id,
                    name:finalRes.user.name,
                    email:finalRes.user.email,
                    credientailToken:finalRes.token,
                }
                //return rest;
            }
            return null
        },
        credentials:{
            email:{label:"User Email",type:"email"},
            password:{label:'Password',type:'password'}
        }

     })


    ],
    
    pages:{signIn:'/login'},

    callbacks: {
      jwt({ user, token }) {
        if (user) {
         token.credientailToken = user.credientailToken;
          token.userId = user.id;
        }
        return token;
      },
      session({ session, token }) {
        if (session.user && token.userId) {
          session.user.id = token.userId;
        }
        return session;
      },
    },


    session:{
        maxAge:60*60*24*60,
    }
}
