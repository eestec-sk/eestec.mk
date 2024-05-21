import React, { useState } from "react";

import { NextSeo } from "next-seo";

const Login = () => {

  const SEO = {
    title: "Login",
    description: "EESTEC MK Login",
    openGraph: {
      url: "https://eestec.mk/login",
      type: "login page/website",
      locale: "mk_MK",
      site_name: "EESTEC MK Login",
    },
  };


  // use formik here or i will cut your knee  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <>
      <NextSeo {...SEO} />

      <div>login here plz</div>

    </>
  );
};

export default Login;
