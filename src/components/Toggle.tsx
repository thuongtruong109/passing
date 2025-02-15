import React, { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  dataInputId: string;
  dataStatusId: string;
};

const Toggle: React.FC<Props> = ({ children, dataInputId, dataStatusId }) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const input = document.getElementById(dataInputId) as HTMLInputElement;
    const status = document.getElementById(dataStatusId);
    const btn = btnRef.current;

    if (!input || !btn) return;

    btn.setAttribute("aria-controls", dataInputId);
    btn.addEventListener("click", () => {
      if (input.type === "password") {
        btn.setAttribute("aria-pressed", "true");
        btn.setAttribute("aria-label", "Hide password");
        input.type = "text";

        if (status) status.textContent = "Password is showing";
      } else {
        btn.setAttribute("aria-pressed", "false");
        btn.setAttribute("aria-label", "Show password");
        input.type = "password";

        if (status) status.textContent = "Password is hidden";
      }
    });
  }, [dataInputId, dataStatusId]);

  return <button ref={btnRef}>{children}</button>;
};

export default Toggle;
