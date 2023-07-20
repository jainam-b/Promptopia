"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

  return (
    <nav className=" flex-between w-full ml-4 mb-16 pt-3">
      <Link className="flex gap-1 flex-center" rel="stylesheet" href="/">
        <div className="container mx-4 -ml-32 mr-32">
          <Image
            src="/assets/images/logo.svg"
            alt="Promptopia Logo"
            width={30}
            height={30}
            className="object-contain "
          />
          <p className="logo_text mx-2 -mt-6 ml-10 ">Promptopia</p>
        </div>
      </Link>
      {/* Desktop navigation */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              {" "}
              Create Post{" "}
            </Link>
            <button type="button" onClick={signOut} className="outline_btn ">
              Sign Out{" "}
            </button>
            <Link rel="stylesheet" href="/profile" />
            <Image
              src={session?.user?.image}
              className="rounded-full"
              width={37}
              height={37}
              alt="profile "
            />
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="black_btn"
                  key={provider.name}
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
      {/* Mobile navigation */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Image
              src={session?.user?.image}
              className="rounded-full"
              width={37}
              height={37}
              alt="profile "
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />
            {toggleDropdown && (
           <div className="dropdown">
                  <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href='/create-prompt'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button type="button" onClick={()=>{setToggleDropdown(false); signOut();}} className="mt-5 w-full black_btn " >
                  Sign Out
                </button>
           </div>
            )}
          </div>
        ) : (
          <>
           {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="black_btn"
                  key={provider.name}
                >
                  Sign In
                </button>
                ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
