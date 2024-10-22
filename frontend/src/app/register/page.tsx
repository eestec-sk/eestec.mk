"use client";
import Image from "next/image";
import HeaderComponent from "@/components/HeaderComponent";
const register = () => {
  return (
    <div>
      <div
        className="w-full p-10"
        style={{
          backgroundPosition: `center`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
        }}
      >
        <h3 className=" font-eestec text-center text-eestec lg:text-6xl md:text-5xl sm:text-4xl text-3xl uppercase font-black">
          BECOME AN EESTECER!
        </h3>

        <div className=" flex justify-center"
        >
          <div className="my-[3rem] w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 "
          style={{
            boxShadow: `0px 216px 60px 0px rgba(0, 0, 0, 0%),
            0px 138px 55px 0px rgba(0, 0, 0, 1%),
            0px 78px 47px 0px rgba(0, 0, 0, 5%),
            0px 35px 35px 0px rgba(0, 0, 0, 9%),
            0px 9px 19px 0px rgba(0, 0, 0, 10%)`,
            borderRadius: `20px`,
            border: "1px solid #ccc"
          }}>
            <form className="space-y-6" action="#">
              <h5 className="text-xl font-medium text-gray-900 dark:text-eestec">
                Register to our platform
              </h5>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-150 dark:border-gray-400 dark:placeholder-gray-400"
                  placeholder="name@eestec.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-150 dark:border-gray-400 dark:placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                 className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-150 dark:border-gray-400 dark:placeholder-gray-400"
                  required
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    className="ms-2 text-sm font-medium text-black"
                  >
                    I am currently a student at an University.
                  </label>
                </div>
                <a
                  href="#"
                  className="ms-auto text-sm text-blue-700 hover:underline dark:text-eestec"
                >
                  I agree to the terms of service and privacy policy.
                </a>
              </div>
              <button
                type="submit"
                className="link-login w-full text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
               Register
              </button>
              <div className="text-sm font-medium text-black">
                Already registered?{" "}
                <a
                  href="/login"
                  className="text-blue-700 hover:underline dark:text-eestec"
                >
                  Log In
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="md:flex justify-center">
        <article className="grid justify-items-center text-center lg:my-6">
          <Image src={"/images/logos_icons/lightning.svg"} width={40} height={40} alt="Feature Image" className="-mt-5"/>
        </article>
      </div>
    </div>
  );
};
export default register;
