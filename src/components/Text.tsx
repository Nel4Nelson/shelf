import { ReactNode } from "react";

interface Props {
  header: ReactNode;
  children: string;
}

const Text = ({ header, children }: Props) => {
  return (
    <div className="w-[600px] lg:w-[842px] flex flex-col gap-4 items-center">
      <h2 className="font-headingFont font-semibold text-center text-6xl text-custom-black-900">
        {header}
      </h2>
      <p className="w-[400px] lg:w-[724px] text-custom-text-body text-center font-bodyRegularFont text-xl">
        {children}
      </p>
    </div>
  );
};

export default Text;
