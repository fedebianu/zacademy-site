import { Link } from "react-router-dom";

function SmartContracts() {
  return (
    <div id="smart-contract">
      <h1 className="lg:text-4xl md:text-3xl sm:text-3xl font-bold mb-4">
        Smart Contract Fellowship
      </h1>

      <div className="grid grid-cols-2 sm:flex sm:flex-col gap-16 my-4">
        <div className="col-span-1 flex flex-col gap-8 justify-center">
          <div>
            <h2 className="text-semibold text-xl mb-4">
              A typical week in the fellowship program
            </h2>
            <p className="text-zinc-500">
              <ul className="list-disc list-inside">
                <li>
                  The auditing sprint starts on Monday with an overview session
                  delivered by one of our resident auditors, a guest auditor, or
                  the codebase author.
                </li>
                <br />
                <li>
                  During the week, async discussion take place between fellows,
                  mentors, guest auditors, residents, and codebase devs.
                </li>
                <br />
                <li>
                  Fellows work in groups during the week. Groups may meet during
                  the week over calls.
                </li>
                <br />
                <li>
                  At the end of the week (or second week for larger codebases),
                  fellows present their findings and receive feedback from our
                  residents, mentors, and codebase authors.
                </li>
                <br />
                <li>
                  The auditing sprint ends with a retreat session where we
                  invite a prominent guest for a lecture or AMA with the
                  fellows.
                </li>
              </ul>
            </p>
          </div>
          <p>
            Before applying, please make sure you have read and understood the
            general structure and guidelines of our programs.
          </p>
          <Link to={"/fellowships"}>
            <button className="w-1/2 px-8 py-3 rounded-xl text-md text-darkgreen text-bold bg-emeraldlight bg-opacity-25 hover:bg-opacity-5 hover:text-emeraldlight duration-700">
              Apply
            </button>
          </Link>
        </div>
        <div className="col-span-1 m-4">
          <div className="grid grid-cols-2 gap-2">
            <div className="border col-span-1 rounded-xl p-4">
              <p className="text-xl font-semibold leading-6 text-gray-600">
                Duration
              </p>
              <p className="text-sm font-semibold leading-6 text-darkgreen">
                4-6 weeks
              </p>
            </div>
            <div className="border col-span-1 rounded-xl p-4">
              <p className="text-xl font-semibold leading-6 text-gray-600">
                Time Commitment
              </p>
              <p className="text-sm font-semibold leading-6 text-darkgreen">
                {">"} 20 hours/week
              </p>
            </div>
          </div>
          <img src="/contract-window.svg" className="py-4 h-[32rem]" />
        </div>
      </div>
    </div>
  );
}

export default SmartContracts;
