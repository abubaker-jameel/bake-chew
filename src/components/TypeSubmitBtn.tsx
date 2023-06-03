import { ReactElement } from "react";

type TypeSubmitProps = {
  title: string;
};

const TypeSubmitBtn = ({ title }: TypeSubmitProps): ReactElement => {
  return (
    <button
      type="submit"
      className={`text-sm bg-black text-white py-2 ring-1 ring-black hover:ring-2 mt-2 capitalize`}
    >
      {title}
    </button>
  );
};

export default TypeSubmitBtn;
