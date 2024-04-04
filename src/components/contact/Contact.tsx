import { useState } from "react";

export default function ContactForm() {
        const [fullname, setFullname] = useState("");
        const [email, setEmail] = useState("");
        const [message, setMessage] = useState("");
        const [error, setError] = useState([]);
        const [success, setSuccess] = useState(false);
      
        const handleSubmit = async (e:any) => {
          e.preventDefault();
      
          console.log("Full name: ", fullname);
          console.log("Email: ", email);
          console.log("Message: ", message);
      
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
           
          });
      
          const { msg, success } = await res.json();
          setError(msg);
          setSuccess(success);
      
          if (success) {
            setFullname("");
            setEmail("");
            setMessage("");
          }
        };
      
  return (
    <div className=" max-w-2xl mx-auto mt-20">
      <form
        onSubmit={handleSubmit}
        className="py-4 mt-4 flex flex-col gap-5"
      >
        <div className="flex flex-col md:flex-row justify-between md:items-center">
          <label htmlFor="fullname" className="md:w-[140px] ">
            Full Name
          </label>
          <input
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            id="fullname"
            placeholder="John Doe"
            className="w-full  px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between md:items-center">
          <label htmlFor="email" className="md:w-[140px]">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="email"
            placeholder="john@gmail.com"
            className="w-full  px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between md:items-center">
          <label htmlFor="message" className=" md:w-[140px] ">
            Your Message
          </label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            id="message"
            placeholder="Type your message here..."
          
          ></textarea>
        </div>

        <button className="bg-green-700 w-1/3 mx-auto rounded-md p-3 text-white font-bold" type="submit">
          Send
        </button>
      </form>

      <div className="bg-gray-100 flex flex-col mt-4">
        {error &&
          error.map((e, index) => (
            <div
              key={index}
              className={`${
                success ? "text-green-800" : "text-red-600"
              } px-5 py-2`}
            >
              {e}
            </div>
          ))}
      </div>
    </div>
  );
}
