import { useState } from 'react';

import Form from './chat/Form';
import Head from './chat/Head';
import Messages from './chat/Messages';

// import * as Accordion from '@radix-ui/react-accordion';
// import {
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from './FAB';

import React from 'react';
// import * as Popover from '@radix-ui/react-popover';
// import { MixerHorizontalIcon, Cross2Icon, ChatBubbleIcon } from '@radix-ui/react-icons';


export default function Chat() {
  const [messages, setMessages] = useState([]);

  return (
  //   <Popover.Root>
  //   <Popover.Trigger asChild>
  //     <button
  //       className="fixed right-8 bottom-8 rounded-full w-[45px] h-[45px] inline-flex items-center justify-center text-violet11 bg-white shadow-[0_2px_10px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black cursor-default outline-none"
  //       aria-label="Update dimensions"
  //     >
  //       <ChatBubbleIcon/>
  //     </button>
  //   </Popover.Trigger>
  //   <Popover.Portal>
  //     <Popover.Content
  //     //  className="rounded-3xl p-15  bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
  //     // className="popup-content"
  //     className="w-[500px] shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
  //      sideOffset={5}
  //     >
  //       <div className="flex-col gap-2.5">
  //         {/* <p className="text-mauve12 text-[15px] leading-[19px] font-medium mb-2.5">Dimensions</p> */}
          
  //         <div className="bg-[#2F343C] rounded-3xl p-5">
  //         Prep Doctors AI Assistant
  //         <div className="w-flex h-[1px] my-4 bg-[#4F5361]" />
  //         <Messages messages={messages} />
  //         <div className="w-flex h-[1px] my-8 bg-[#4F5361]" />
  //         <Form setMessages={setMessages} />
  //         </div>
  //       </div>
  //       <Popover.Close
  //         className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-violet11 absolute top-[5px] right-[5px] hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 outline-none cursor-default"
  //         aria-label="Close"
  //       >
  //         <Cross2Icon />
  //       </Popover.Close>
  //       <Popover.Arrow className="fill-white" />
  //     </Popover.Content>
  //   </Popover.Portal>
  // </Popover.Root>

  
  //   <Accordion.Root
  //   className="bg-mauve6 w-[500px] rounded-md shadow-[0_2px_10px] shadow-black/5"
  //   type="single"
  //   defaultValue="item-1"
  //   collapsible
  // >
  //   <AccordionItem value="item-1">
  //     <AccordionTrigger>Prep Doctors Chatbot</AccordionTrigger>
  //     <AccordionContent>

  //     <div className="bg-[#2F343C] rounded-3xl p-12">
  //     <Head />
  //     <div className="w-flex h-[1px] my-8 bg-[#4F5361]" />
  //     <Messages messages={messages} />
  //     <div className="w-flex h-[1px] my-8 bg-[#4F5361]" />
  //     <Form setMessages={setMessages} />
  //     </div>
    

  //     </AccordionContent>
  //   </AccordionItem>


  // </Accordion.Root>

   
    <div className="bg-[#2F343C] rounded-5xl p-3">
      
      <Head />
      <div className="w-flex h-[1px] my-8 bg-[#4F5361]" />
      <Messages messages={messages} />
      <div className="w-flex h-[1px] my-8 bg-[#4F5361]" />
      <Form setMessages={setMessages} />
    </div>
    
  );
}