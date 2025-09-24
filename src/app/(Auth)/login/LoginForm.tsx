'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "_/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "_/components/ui/form";
import { Input } from "_/components/ui/input";
import { useForm } from "react-hook-form";
import { Loginschema } from "./login.schema";
import { loginFormType } from "./login.types";
import { handleLogin } from "./login.actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const router = useRouter();
  const RHFObj =  useForm({
    resolver:zodResolver(Loginschema),
    defaultValues:{
      email: "",
      password: "",
    }, 
    mode:'onBlur'
  });
  const {handleSubmit, control} = RHFObj

  async function  mySubmit(data:loginFormType){


  // signIn("credentials",{email:data.email,password:data.password})
  const resp = await signIn("credentials",{...data,redirect:false});
  console.log('signinRes',resp);
  
  if (resp?.ok) {
    toast.success('Loggedin Successfully', {position:'top-center',duration:2000,dismissible:true});
    // setTimeout(()=>  router.push('/'),1500 );
    window.location.href='/';
  }else{
      toast.error("Email or Password is in-correct", {position:'top-center',duration:2000,dismissible:true});
  }

  }
  
    return (
<Form {...RHFObj} >
  <form className="my-5" onSubmit={handleSubmit(mySubmit)}>



  <FormField
    control={control}
    name="email"
    render={({field}) => (
      <FormItem>
        <FormLabel>email:</FormLabel>
        <FormControl>
          <Input className="my-3" type="email" {...field} />
        </FormControl>

        <FormMessage />
      </FormItem>
    )}
/>
  <FormField
    control={control}
    name="password"
    render={({field}) => (
      <FormItem>
        <FormLabel>Password:</FormLabel>
        <FormControl>
          <Input className="my-3" type="password" {...field} />
        </FormControl>

        <FormMessage />
      </FormItem>
    )}
/>

 <Button className="w-28 bg-green-500 block my-5">Login</Button>

</form>
</Form>
  )
}

