import ContactForm from '@/components/contact/Contact'
import Nav from '@/components/layout/Nav'
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react'

const Contact = () => {
  const  session  = useSession();

  const handleSignIn = async () => {
    try {
      await signIn(); // Sign in without provider to use default provider
    } catch (error) {
      console.error('Sign in failed:', error);
      // Handle error
    }
  };



  

  if (session.data === null) {
    return (
      <div className="flex mt-[13%] flex-col mx-auto max-w-xl items-center justify-center my-auto ">
        <p className="my-8 text-[32px] ">Welcome to CryptoCampus</p>  
        <button className="text-[24px] w-1/3 flex justify-center bg-green-500 p-3 rounded-md " onClick={handleSignIn}>Login</button>

      </div>
    );
  }

  return (
    <div className='mx-auto max-w-4xl pt-4 ' >
   <p >WelCome  {session?.data?.user?.name}</p>
   <button onClick={
  async ()=>{
    await signOut();
  }
   }> logout </button>
        <ContactForm/>
    </div>
  )
}

export default Contact