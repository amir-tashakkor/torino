import OtpInput from "react18-input-otp";
import React, { useEffect, useState } from "react";

import styles from "./ReactOtpInput.module.css";

export default function ReactOtpInput({ code, setCode, error }) {
  const [otp, setOtp] = useState("");
  const chandleChange = (code) => {
    setCode(code);
  };

  return (
    <div style={{ direction: "ltr" }}>
      <OtpInput
        className={error ? styles.containerError : styles.container}
        value={code}
        onChange={chandleChange}
        numInputs={6}
        separator={<span> </span>}
        inputStyle="otp-input"
        shouldAutoFocus
        inputMode="numeric"
        placeholder="------"
        isInputNum
      />
    </div>
  );
}
