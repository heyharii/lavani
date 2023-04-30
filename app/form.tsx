"use client"

import { useRouter } from "next/navigation"
import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast"
import { Icons } from "@/components/ui/icons";

export default function Form() {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const [input, setInput] = useState();
  const [success, setSuccess] = useState(false);

  async function onSubmit() {
    setIsLoading(true)

    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: input,
      }),
    })

    setIsLoading(false)

    if (!response?.ok) {
      if (response.status === 400) {
        return toast({
          title: "Email has been subscribe",
          description: "Please use another email or wait for our announcement",
          variant: "destructive",
        })
      }

      return toast({
        title: "Something went wrong.",
        description: "Your email was not subscribed. Please try again.",
        variant: "destructive",
      })
    }

    setSuccess(true)

    // This forces a cache invalidation.
    router.refresh()
  }

  return (
    <div className="w-full">
      {success ? 
      <>
         <p className="text-white text-[20px] leading-[24px] font-normal mt-8 md:mt-32 font-inter">
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
        <p className="text-white text-[20px] leading-[24px] font-normal mt-8 md:mt-32 font-inter">
          Be the first to know by subscribing to our newsletter
        </p>
        <p className="text-white text-[20px] leading-[24px] font-normal font-inter mt-2">
        Sign up now and never miss out
        </p>
 
        <div className="flex gap-6 justify-start items-center mt-8">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-black border-white border rounded-md px-3 py-2 w-[342px]"
            onChange={(e:any) => setInput(e.target.value)}
          />
          <button 
              className={`bg-black border-white border rounded-md px-4 py-2 flex items-center justify-center h-[42px] ${isLoading ? "cursor-not-allowed opacity-60" : ""}`}
              onClick={onSubmit}
              disabled={isLoading}
          >
            {isLoading ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Icons.send className="mr-2 h-4 w-4" />
            )}
            Submit
          </button>
        </div>
        </>
      }
    </div>
  );
}
