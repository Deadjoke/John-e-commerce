import * as zod from 'zod'


export const Registerschema = zod.object(
  {
    name: zod.string().nonempty("Name is Required").min(3,"Name must at least contain 3 chars").max(15,"Name can't exceed 15 chars"),
    email: zod.email("Invalid email"),
    password:zod.string('password is required').nonempty('password is required').regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:") ,
    rePassword:zod.string("rePassword is required").nonempty('rePassword is required').regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:"),
    phone: zod.string('phone is required').nonempty('phone is required').regex(/^01[0125][0-9]{8}$/,"Phone must be an egyption number"),
  }
).refine((value)=>{
  return value.password === value.rePassword;
},{path:['rePassword'] , error:"Passwords doesn't match"})


