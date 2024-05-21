
import React, { useState } from "react";

import { NextSeo } from "next-seo";

const Register = () => {

  const SEO = {
    title: "Register",
    description: "EESTEC MK Register",
    openGraph: {
      url: "https://eestec.mk/register",
      type: "register/website",
      locale: "mk_MK",
      site_name: "EESTEC MK Register",
    },
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const registerHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };


  // use formik or i will cut your nipples
  return (
    <>
      <NextSeo {...SEO} />

      <div>register here plz</div>
    </>
  );
};

export default Register;
