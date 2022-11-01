import { FC } from "react";

type TButton = {
  children: React.ReactNode;
  form: string;
};

export const Button: FC<TButton> = ({ form, children }) => {
  return (
    <button
      className="button"
      style={{ borderRadius: form === "round" ? "25px" : "5px" }}
    >
      {children}
    </button>
  );
};
