"use client"

import { useState } from "react";

export default function Form() {
  const [input, setInput] = useState();
  const [success, setSuccess] = useState(false);
  return (
    <div>
      {success ? 
      <>
         <p className="text-white text-[20px] leading-[24px] font-normal mt-32 font-inter">
           Thank you for subscribed to our newsletter!
         </p>
         <p className="text-white text-[20px] leading-[24px] font-normal mt-2 font-inter">
          Stay tuned for the latest updates, exclusive offers, and exciting news about our upcoming products.
         </p>
         <p className="text-white text-[20px] leading-[24px] font-normal mt-2 font-inter">
          We can&apos;t wait to share them with you
         </p>
        </>
        :
        <>
        <p className="text-white text-[20px] leading-[24px] font-normal mt-32 font-inter">
          Be the first to know by subscribing to our newsletter <br /> Sign up
          now and never miss out
        </p>
            
        <div className="flex gap-6 justify-start items-center mt-8">
          <input
            type="text"
            placeholder="Enter your email"
            className="bg-black border-white border rounded-md px-3 py-2 w-[342px]"
            onChange={(e:any) => setInput(e.target.value)}
          />
          <button className="w-[108px] bg-black border-white border rounded-md px-4 py-2 flex items-center justify-center gap-2.5 h-[42px]" onClick={() => setSuccess(true)}>
            Submit
          </button>
        </div>
        </>
      }
    </div>
  );
}
