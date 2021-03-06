import React from "react";
const submitString = "//Submit the form below to shoot me an email";
const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/41166d10-7622-4ac4-92c3-c768c224b113"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p>{submitString}</p>
        </div>
        <input
          className="my-4 p-2 rounded-lg bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 rounded-lg bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="my-4 p-2 rounded-lg bg-[#ccd6f6]"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white  rounded-lg border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
