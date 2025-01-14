import HyperText from "@/components/ui/hyper-text";
import Image from "next/image";
import Link from "next/link";

export default function DueDiligence() {
  return (
    <>
      <div className="flex flex-row gap-16 sm:flex-col items-center my-8 justify-between sm:text-center">
        <div className="flex flex-col">
          <HyperText
            className="lg:text-4xl text-3xl font-bold sm:text-center"
            text="Consulting"
          />
          {/* <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6 mt-12">
            {data.map((item) => {
              return (
                <div className="col-span-1" key={item.number}>
                  <h3 className="lg:text-5xl text-3xl font-semibold leading-6">
                    {item.number}
                  </h3>
                  <p className="text-sm font-semibold text-darkgreen mt-3">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div> */}

          <img
            alt=""
            src="./illustrations/code.svg"
            className="h-[12rem] lg:hidden md:hidden"
          />
          <p className="text-zinc-500 text-justify mb-8">
            <br />
            Get due diligence on blockchain projects and protocols :
            architecture, design, code, algorithms, and approach.
          </p>
          <Link href={"/contact-us"}>
            <button className="px-8 py-3 rounded-xl sm:w-full text-md text-darkgreen text-bold bg-emeraldlight bg-opacity-25 hover:bg-opacity-5 hover:text-emeraldlight duration-700">
              Enquire
            </button>
          </Link>
        </div>
        <div className="sm:hidden">
          <img alt="" src="./illustrations/code.svg" className="h-[16rem]" />
        </div>
      </div>
    </>
  );
}
