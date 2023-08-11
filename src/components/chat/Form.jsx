import { data } from "autoprefixer";
import axios from "axios";

import { formatRelative } from "date-fns";
import { useState } from "react";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";
import { da } from "date-fns/locale";
// import requestIp from 'request-ip';

const redis = new Redis({
  url: "https://us1-inviting-killdeer-38031.upstash.io",
  token:
    "AZSPASQgZjFmMTZmNjEtM2ZhOS00MTFlLWJhNmItOWUxNDg4MTQ5NzUwZjQ0ZmE0ZjdmZTE4NGVkN2FjNzUyZDU4MTY3Y2Q5ODU=",
});

// Create a new ratelimiter, that allows 5 requests per 5 seconds
const ratelimiter = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.fixedWindow(3, "10 s"),
  analytics: true,
  prefix: "@upstash/ratelimit",
});

const regeneratelimiter = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.fixedWindow(1, "10 s"),
  analytics: true,
  prefix: "@upstash/ratelimit",
});

const SendIcon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path
      d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"
      //  fill="green"
    />
  </svg>
);
let limit = 0;
let session_id = "";
let client_ip = "";
let regenerate = false;
let prev_message = "";
export default function Form({ setMessages }) {
  const [message, setMessage] = useState("");

  const messageResponse = async () => {
    const { data } = await axios.post("https://prepdoctors.online/afkgpt", {
      message: message,
      sessionid: session_id,
      regenerate: regenerate,
    },{ withCredentials:true});
    // let client_ip = data.headers['x-forwarded-for'];
    setMessages((prev) => [
      ...prev,
      {
        msg: data["response"],
        type: "bot",
        time: formatRelative(new Date(), new Date()),
      },
    ]);
    session_id = data["sessionid"];
    // console.log(data['response'])
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!message) return;
    // console.log('inside send message');

    const identifier = client_ip;
    const { success } = await ratelimiter.limit(identifier);

    if (!success) {
      setMessages((prev) => [
        ...prev,
        {
          msg: "You have exceeded the rate limit. Please try again later.",
          type: "bot",
          time: formatRelative(new Date(), new Date()),
        },
      ]);

      setMessage("");
      session_id = session_id;
      return;
    } else {
      // console.log('inside else');
      setMessages((prev) => [
        ...prev,
        {
          msg: message,
          type: "user",
          time: formatRelative(new Date(), new Date()),
        },
      ]);
      setMessage("");
      prev_message = message;
      await messageResponse();
    }
  };

  const regenerate_ans = async (e) => {
    e.preventDefault();
    const identifier = client_ip;
    const { success } = await regeneratelimiter.limit(identifier);
    if (!success) {
      setMessages((prev) => [
        ...prev,
        {
          msg: "You have exceeded the rate limit. Please try again later.",
          type: "bot",
          time: formatRelative(new Date(), new Date()),
        },
      ]);

      setMessage("");
      session_id = session_id;
      return;
    } else {
      regenerate = true;

    const { data } = await axios.post("https://prepdoctors.online/afkgpt", {
      message: prev_message,
      sessionid: session_id,
      regenerate: regenerate,
    });
    setMessages((prev) => [
      ...prev,
      {
        msg: data["response"],
        type: "bot",
        time: formatRelative(new Date(), new Date()),
      },
    ]);
    regenerate = false;
    }
    
    // setMessages(prev => {
    //   // Create a copy of the previous messages array
    //   const updatedMessages = [...prev];

    //   // Check if there are messages in the array
    //   if (updatedMessages.length > 0) {
    //     // Replace the last message with the new message object
    //      [...prev][prev.length - 2] = {
    //       msg: data['response'],
    //       type: 'bot',
    //       time: formatRelative(new Date(), new Date())
    //     };
    //   } else {
    //     // If the array is empty, add the new message object to the array
    //     updatedMessages.push({
    //       msg: data['response'],
    //       type: 'bot',
    //       time: formatRelative(new Date(), new Date())
    //     });
    //   }
    //   // Return the updated messages array
    //   // return updatedMessages;
    // });
    
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
        }}
      >
        {message.length}/150
        <button
          type="submit"
          onClick={regenerate_ans}
          className="mr-2 bg-white hover:opacity-50 active:opacity-100 transition-colors py-2 px-3 rounded-xl"
        >
          Regenerate Response
        </button>
      </div>
      <form className="relative flex items-center">
        <input
          type="text"
          maxLength={150}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-[#3A3F47] text-white placeholder:text-[#949494] text-sm rounded-2xl p-4 w-full outline-none"
          placeholder="Type your message here..."
        />

        <button
          type="submit"
          onClick={sendMessage}
          className="absolute right-0 mr-2 bg-white hover:opacity-50 active:opacity-100 transition-colors py-2 px-3 rounded-xl"
        >
          <SendIcon className="w-5 h-5 fill-[#3A3F47]" />
        </button>
      </form>
    </div>
  );
}
