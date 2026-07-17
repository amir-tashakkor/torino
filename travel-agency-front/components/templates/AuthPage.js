import { useState } from "react";

import CheckOtp from "@/module/CheckOtp";
import SendOtp from "@/module/SendOtp";

function AuthPage({ setOpen, setUser }) {
  const [step, setStep] = useState(1);
  const [code, setCode] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState(false);

  return (
    <>
      {step === 1 && (
        <SendOtp setStep={setStep} setMobile={setMobile} mobile={mobile} />
      )}
      {step === 2 && (
        <CheckOtp
          mobile={mobile}
          code={code}
          setCode={setCode}
          error={error}
          setError={setError}
          setOpen={setOpen}
          setUser={setUser}
        />
      )}
    </>
  );
}

export default AuthPage;
