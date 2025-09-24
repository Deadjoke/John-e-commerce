import LoginForm from "../login/LoginForm";

export default function Login() {
  return (
    <div className="w-1/2 mx-auto my-14">
      <h1 className="text-4xl font-semibold my-5 text-center">Login to your <span className="text-red-600">Fresh-Cart</span> </h1>
      <div className="flex flex-col gap-3 my-5">
      <LoginForm/>
    
      </div>
    </div>
  )
}
