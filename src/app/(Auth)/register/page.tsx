import RegisterForm from "./RegisterForm";

export default function Register() {

  return (
    <div className="w-1/2 mx-auto my-14">
      <h1 className="text-4xl font-semibold my-5 text-center">Welcome to <span className="text-red-600">Fresh-Cart</span> Market</h1>
      <div className="flex flex-col gap-3 my-5">
       <RegisterForm/>

      </div>
    </div>
  )
}