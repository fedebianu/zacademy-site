import { CloseCircleOutlined, MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

interface Props {
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
}

export function Navbar({ menuOpen, setMenuOpen }: Props) {
  return (
    <div className="w-full flex h-18 items-center justify-between top-0 p-6 z-10">
      <div className="flex flex-row gap-4 text-emeraldlight items-center text-xl lg:ml-36 z-20">
        <Link to={"/"}>
          <img src="/logo.svg" className="h-10" />
        </Link>
      </div>
      <button
        className="px-8 py-3 rounded-xl lg:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <MenuOutlined />
      </button>
      <div className="flex flex-row items-center gap-1 sm:hidden md:hidden lg:mr-36">
        <Link to={"/members"}>
          <button className="px-6 py-3 rounded-xl text-md text-zinc-400 hover:text-emeraldlight hover:bg-white hover:bg-opacity-5 duration-700">
            Members
          </button>
        </Link>
        <a href="https://reports.zAcademy.dev/">
          <button className="px-6 py-3 rounded-xl text-md text-zinc-400 hover:text-emeraldlight hover:bg-white hover:bg-opacity-5 duration-700">
            Audits
          </button>
        </a>
        <Link to={"/fellowships"}>
          <button className="px-6 py-3 rounded-xl text-md text-zinc-400 hover:text-emeraldlight hover:bg-white hover:bg-opacity-5 duration-700">
            Fellowships
          </button>
        </Link>
        <a href="#contactform">
          <button className="px-8 py-3 rounded-xl text-md text-darkgreen text-bold bg-emeraldlight bg-opacity-25 hover:bg-opacity-5 hover:text-emeraldlight duration-700">
            Contact Us
          </button>
        </a>
      </div>
    </div>
  );
}

interface MobileProps {
  setMenuOpen: (menuOpen: boolean) => void;
}

export function MobileNavbar({ setMenuOpen }: MobileProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        true &&
        inputRef.current &&
        !inputRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputRef, setMenuOpen]);
  return (
    <div
      className="w-full h-full z-40 duration-700"
      ref={inputRef}
    >
      <div className="mt-8 mx-auto flex flex-col p-8 gap-8">
        <button
          onClick={() => {
            setMenuOpen(false);
          }}
          className="text-green-400"
        >
          <CloseCircleOutlined style={{ fontSize: "2rem" }} />
        </button>
        <Link to={"/members"}>
          <button
            onClick={() => {
              setMenuOpen(false);
            }}
            className="p-6 rounded-xl w-full text-xl text-zinc-400 hover:text-emeraldlight hover:bg-white hover:bg-opacity-5 duration-700"
          >
            Members
          </button>
        </Link>
        <a href="https://docs.spect.network/spect-docs/introduction/faq">
          <button className="p-6 rounded-xl w-full text-xl text-zinc-400 hover:text-emeraldlight hover:bg-darkgreen hover:bg-opacity-5 duration-700">
            Audits
          </button>
        </a>
        <Link to={"/fellowships"}>
          <button
            onClick={() => {
              setMenuOpen(false);
            }}
            className="p-6 rounded-xl w-full text-xl text-zinc-400 hover:text-emeraldlight hover:bg-darkgreen hover:bg-opacity-5 duration-700"
          >
            Fellowships
          </button>
        </Link>
        <a href="#contactform">
          <button className="p-6 rounded-xl w-full text-xl text-emeraldlight text-bold hover:bg-darkgreen hover:bg-opacity-5 duration-700">
            Countact Us
          </button>
        </a>
      </div>
    </div>
  );
}
