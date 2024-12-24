import HyperText from "@/components/ui/hyper-text";
import { Link } from "react-router-dom";

export default function Residents() {
  return (
    <>
      <div className="grid grid-cols-2 sm:flex sm:flex-col sm:align-center gap-4 lg:my-32 my-16 mx-6 text-justify sm:text-center">
        <div className="mr-10 sm:mr-0 sm:flex sm:flex-col">
          <HyperText
            className="lg:text-5xl text-3xl font-bold sm:text-center"
            text="ZK & Smart Contract Expertise"
          />
          <img
            src="./illustrations/code.svg"
            className="h-[8rem] mt-8 md:hidden lg:hidden"
          />
          <p className="text-zinc-500 mb-8 sm:text-justify">
            <br />
            Get your codebase audited by our top-tier resident auditors
            <br /><br />
            → Get your codebase audited by our top-tier resident auditors
            <br />
            → Get your codebase audited by our top-tier resident auditors.
            <br /><br />
          </p>
          <Link to={"/contact-us"}>
            <button className="px-8 py-3 sm:w-full rounded-xl text-md text-darkgreen text-bold bg-emeraldlight bg-opacity-25 hover:bg-opacity-5 hover:text-emeraldlight duration-700">
              Get an Audit
            </button>
          </Link>
        </div>
        <img
          src="./illustrations/hands out of laptop.svg"
          className="h-[15rem] col-span-1 mt-8 sm:hidden"
        />
      </div>
    </>
  );
}