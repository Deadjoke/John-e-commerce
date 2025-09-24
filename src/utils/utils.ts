import { decode } from 'next-auth/jwt';
import { cookies } from 'next/headers'


export default async function getUserToken () {
const cookie = await cookies();
const sessionToken = cookie.get('next-auth.session-token')?.value;
const decodedJWT =  await decode({token:sessionToken,secret:process.env.NEXTAUTH_SECRET||''})
// console.log('usertoken',decodedJWT?.credientailToken);

 return decodedJWT?.credientailToken;
}
