'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "_/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "_/components/ui/form";
import { Input } from "_/components/ui/input";
import { useForm } from "react-hook-form";
import { Registerschema } from "./register.schema";
import { registerFormType } from "./register.types";
import { handleRegistration } from "./register.actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter()
  const RHFObj =  useForm({
    resolver:zodResolver(Registerschema),
    defaultValues:{
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    }, 
    mode:'onBlur'
  });
  const {handleSubmit, control} = RHFObj

  async function  mySubmit(data:registerFormType){
    // console.log(data);   
    // the problem here is that we call this api on client side so the responce can be tracked in the network tab 
    // and the network tab will contain all request info the endPoint where we sent the data to and that is bad bec 
    // any outsider can know where the data is going to and the user token that the request returned
    //  which mean he can do any operation using this token to our database using our endpoint
    const resOutput =  await handleRegistration(data)
    if (resOutput === true) {
      toast.success('Registered Successfully', {position:'top-center',duration:2000,dismissible:true})
      router.push('/')
    }else{
      toast.error(resOutput, {position:'top-center',duration:2000,dismissible:true})
    }
  }
  
    return (
<Form {...RHFObj} >
  <form className="my-5" onSubmit={handleSubmit(mySubmit)}>

  <FormField
    control={control}
    name="name"
    render={({field}) => (
      <FormItem>
        <FormLabel>Username:</FormLabel>
        <FormControl>
          <Input className="my-3" {...field} />
        </FormControl>

        <FormMessage />
      </FormItem>
    )}
/>

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
  <FormField
    control={control}
    name="rePassword"
    render={({field}) => (
      <FormItem>
        <FormLabel>Confirm Password:</FormLabel>
        <FormControl>
          <Input className="my-3" type="password" {...field} />
        </FormControl>

        <FormMessage />
      </FormItem>
    )}
/>
  <FormField
    control={control}
    name="phone"
    render={({field}) => (
      <FormItem>
        <FormLabel>User Phone:</FormLabel>
        <FormControl>
          <Input className="my-3" {...field} type="tel" />
        </FormControl>

        <FormMessage />
      </FormItem>
    )}
/>

 <Button className="w-28 bg-green-500 block">Register</Button>

</form>
</Form>
  )
}
