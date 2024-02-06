import { Link } from "react-router-dom";

export default function Research() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 my-32">
        <div className="col-span-1">
          <img src="/code.svg" className="h-[15rem] mt-8" />
        </div>
        <div className="col-span-1 mr-10">
          <h1 className="lg:text-5xl font-bold lg:leading-normal">
            {" "}
            Shh.. it's a Secret: <br /> ZK Research
          </h1>
          <p className="text-zinc-500 mb-8">
            <br />
            In the realm of Innovation, we take pride in our forward-thinking
            approach, evident in our incubation of novel programs such as the ZK
            auditing fellowship, following the successful model of our smart
            contract fellowship.
            <br />
          </p>
          <Link to={"/"}>
            <button className="px-8 py-3 rounded-xl text-md text-darkgreen text-bold bg-emeraldlight bg-opacity-25 hover:bg-opacity-5 hover:text-emeraldlight duration-700">
              Read Our Blogs
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
