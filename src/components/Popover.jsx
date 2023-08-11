import React from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { useState } from "react";

const RadioGroupPopup = ({ onSubmit }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the selected option to the backend using an API request (e.g., fetch)
    // You can replace the URL and method with your own backend API endpoint
    fetch("/api/your-backend-endpoint", {
      method: "POST",
      body: JSON.stringify({ selectedOption }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend if needed
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
    onSubmit();
  };

  return (
    <div className="popup">
      <form onSubmit={handleSubmit}>
        {/* Add more options as needed */}

        <RadioGroup.Root
          className="flex flex-col gap-2.5"
          defaultValue="default"
          aria-label="View density"
        >
          <div className="flex items-center">
            {/* <RadioGroup.Item
              className="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
              value="default"
              id="r1"
            >
              <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet11" />
            </RadioGroup.Item> */}
            <label
              className="text-white text-[15px] leading-none pl-[15px]"
              htmlFor="r1"
            >
              <input
                type="radio"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleOptionChange}
              />
              Chatbot V1
            </label>
          </div>
          <div className="flex items-center">
            {/* <RadioGroup.Item
              className="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
              value="comfortable"
              id="r2"
            >
              <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet11" />
            </RadioGroup.Item> */}
            <label
              className="text-white text-[15px] leading-none pl-[15px]"
              htmlFor="r2"
            >
              <input
                type="radio"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleOptionChange}
              />
              Chatbot V2
            </label>
          </div>
          <div className="flex items-center">
            {/* <RadioGroup.Item
              className="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
              value="compact"
              id="r3"
            >
              <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet11" />
            </RadioGroup.Item> */}
            <label
              className="text-white text-[15px] leading-none pl-[15px]"
              htmlFor="r3"
            >
              <input
                type="radio"
                value="option3"
                checked={selectedOption === "option3"}
                onChange={handleOptionChange}
              />
              Chatbot V3
            </label>
          </div>
        </RadioGroup.Root>

        <button type="submit"
        className="absolute right-0 mr-2 bg-white hover:opacity-50 active:opacity-100 transition-colors py-2 px-3 rounded-xl"
        >
          Submit</button>
      </form>
    </div>
  );
};

export default RadioGroupPopup;
