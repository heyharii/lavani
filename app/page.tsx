import Image from "next/image";
import { Calistoga, Inter } from "next/font/google";
import Form from "./form";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="mx-auto flex h-screen max-w-screen-xl bg-black overflow-hidden">
      <div className="w-full max-w-[600px] h-full relative hidden md:block">
        <div className="absolute z-10 left-[60px] top-[60px] flex items-end justify-center bg-gradient-to-t from-black via-black h-auto w-auto">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-0 lg:pointer-events-auto"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logo.png"
              alt="Vercel Logo"
              width={339}
              height={45}
              priority
            />
          </a>
        </div>

        <Image
          src="/wardrobe.webp"
          alt="Background Image"
          layout="fill"
          objectFit="contain"
          className="z-0"
          quality={100}
        />
      </div>
      <div className="w-full max-w-[550px] md:max-w-[550px] mx-auto grow flex flex-col h-full justify-center items-start p-10 xl:p-0">
        <div className="md:hidden mb-6 md:mb-12 flex items-end justify-center bg-gradient-to-t from-black via-black h-auto w-auto">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-0 lg:pointer-events-auto"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logo.png"
              alt="Vercel Logo"
              width={339}
              height={45}
              priority
            />
          </a>
        </div>

        <p className="text-white text-[100px] font-bold leading-[121px] font-inter">
          Stay Tuned
        </p>
        <p className="text-[#888888] text-[22px] leading-[27px] font-normal mt-6 font-inter">
          Stay tuned for our exciting new products and updates
        </p>
        <hr className="border-white w-full border-t mt-[20px] md:mt-[60px] max-w-[556px]" />
        <Form />
      </div>
    </div>
  );
}
