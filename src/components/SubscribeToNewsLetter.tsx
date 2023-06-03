import { ReactElement } from "react";
import SubscribeButton from "./TypeSubmitBtn";

type SubscribeToNewsLetterProps = {
  title: string;
  inputPlaceHolder: string;
};

const SubscribeToNewsLetter = ({
  title,
  inputPlaceHolder,
}: SubscribeToNewsLetterProps): ReactElement => {
  return (
    <section className="container flex flex-col justify-between w-full  mx-auto py-20 min-h-[280px]">
      <h1 className="text-sm font-bold text-center capitalize">{title}</h1>
      <form className="flex flex-col justify-between min-w-full sm:min-w-[24rem] lg:min-w-[30rem] mx-auto">
        <input
          type="text"
          placeholder={inputPlaceHolder}
          className="p-1 text-sm ring-1 ring-black hover:ring-2"
        />
        <SubscribeButton title="subscribe now" />
      </form>
    </section>
  );
};

export default SubscribeToNewsLetter;
