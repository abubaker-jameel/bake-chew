import { ReactElement } from "react";
import SubscribeToNewsLetter from "../components/SubscribeToNewsLetter";
import UnderLay from "../components/UnderLay";
import SubmitButton from "../components/TypeSubmitBtn";

type ContactProps = {
  titleTop: string;
  titleBottom: string;
  labelYourName: string;
  labelYourEmail: string;
  labelTextAria: string;
  placeHolderYourName: string;
  placeHolderYourEmail: string;
  placeHolderTextArea: string;
};

const Contact = ({ ...ContactProps }: ContactProps): ReactElement => {
  return (
    <>
      <UnderLay title="contact" />
      <section className="container min-h-[40rem] pt-20">
        <h1 className="text-2xl lg:text-4xl normal-case font-bold">
          {ContactProps.titleTop}
        </h1>
        <h1 className="text-2xl lg:text-4xl normal-case font-bold">
          {ContactProps.titleBottom}
        </h1>
        <form action="" className="flex flex-col w-full">
          <div className="flex flex-col sm:flex-row gap-5 w-full mt-5">
            <div className="flex flex-col justify-center w-full">
              <label
                htmlFor={ContactProps.labelYourName}
                className="text-base capitalize"
              >
                {ContactProps.labelYourName}
              </label>
              <input
                id={ContactProps.labelYourName}
                type="text"
                placeholder={ContactProps.placeHolderYourName}
                className="text-sm text-gray-500 p-3 mt-1 bg-gray-100 hover:outline hover:outline-1 focus:outline focus:outline-1 focus:outline-black"
              />
            </div>
            <div className="flex flex-col justify-center w-full">
              <label
                htmlFor={ContactProps.labelYourEmail}
                className="text-base capitalize"
              >
                {ContactProps.labelYourEmail}
              </label>
              <input
                id={ContactProps.labelYourEmail}
                type="email"
                placeholder={ContactProps.placeHolderYourEmail}
                className="text-sm text-gray-500  p-3 mt-1 bg-gray-100 hover:outline hover:outline-1 focus:outline focus:outline-1 focus:outline-black"
              />
            </div>
          </div>
          <div className="flex flex-col pt-4">
            <label
              htmlFor={ContactProps.labelTextAria}
              className="text-base capitalize"
            >
              {ContactProps.labelTextAria}
            </label>
            <textarea
              name=""
              id={ContactProps.labelTextAria}
              className="text-sm text-gray-500 p-3 mt-1 bg-gray-100 h-40 hover:outline hover:outline-1 focus:outline focus:outline-1 focus:outline-black"
              placeholder={ContactProps.placeHolderTextArea}
            ></textarea>
          </div>
          <SubmitButton title="Submit" />
        </form>
      </section>
      <SubscribeToNewsLetter
        title="Subscribe to My NewsLetter"
        inputPlaceHolder="Enter your email here"
      />
    </>
  );
};

export default Contact;
