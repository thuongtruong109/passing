import React from "react";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Gen: React.FC<Props> = ({ onChange }: Props) => {
  const genPass = () => {
    const length = 16;
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?";
    let password = "";
    for (let i = 0; i < length; i++) {
      const at = Math.floor(Math.random() * charset.length);
      password += charset.charAt(at);
    }

    const event = {
      target: { value: password },
    } as React.ChangeEvent<HTMLInputElement>;
    onChange(event);
  };

  return (
    <button type="button" onClick={genPass}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="black"
          d="m20 7l.94-2.06L23 4l-2.06-.94L20 1l-.94 2.06L17 4l2.06.94zM8.5 7l.94-2.06L11.5 4l-2.06-.94L8.5 1l-.94 2.06L5.5 4l2.06.94zM20 12.5l-.94 2.06l-2.06.94l2.06.94l.94 2.06l.94-2.06L23 15.5l-2.06-.94zm-2.29-3.38l-2.83-2.83c-.2-.19-.45-.29-.71-.29s-.51.1-.71.29L2.29 17.46a.996.996 0 0 0 0 1.41l2.83 2.83c.2.2.45.3.71.3s.51-.1.71-.29l11.17-11.17c.39-.39.39-1.03 0-1.42m-3.54-.7l1.41 1.41L14.41 11L13 9.59zM5.83 19.59l-1.41-1.41L11.59 11L13 12.41z"
        />
      </svg>
    </button>
  );
};

export default Gen;
