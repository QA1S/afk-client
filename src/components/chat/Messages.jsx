import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import MarkdownLite from './MarkdownLite'
import React from 'react';
// import { useMediaQuery } from '@material-ui/core';

function TextWithLinks(props) {
  let text = props.text;
  // let htmlText = text.replace(/(\r\n|\n|\r)/gm, '<br>');
  let linkRegex = /((http|https):\/\/[^\s]+)/g;
  
  let linkText = text.replace(linkRegex, '<a href="$1">$1</a>');
  return (
    <React.Fragment>
      <div dangerouslySetInnerHTML={{__html: linkText}} />
      {/* <div dangerouslySetInnerHTML={{__html: htmlText}} /> */}
    </React.Fragment>
  );
}
const LinkRenderer = ({ href, children }) => {
  const linkStyle = {
    color: 'blue', // Customize the link color
    textDecoration: 'underline', // Add an underline to the link
    // Add any other inline styles as needed
  };

  return (
    <a href={href} style={linkStyle}>
      {children}
    </a>
  );
};
function Message({ msg, type, time }) {
  msg = msg.replace(/(\r\n|\n|\r)/gm, '<br>');
  let linkRegex = /((http|https):\/\/[^\s]+)/g;
  msg = msg.replace(linkRegex, '<a href="$1">$1</a>');
  return (
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      // className={`flex items-center `}
      // className={`flex items-center ${
      //   type === 'bot' ? 'justify-start' : 'justify-end'
      // }`}
    >
      <div
        className={`flex-col items-start justify-center text-white rounded-xl p-4 ${
          type === 'bot'
            ? 'bg-[#3A3F47] rounded-tl-none'
            : 'bg-[#8AA1FF] rounded-br-none'
        }`}
      >
        <p className='ow-break-word'>
          <div dangerouslySetInnerHTML={{ __html: msg}} /> 
          {/* <MarkdownLite text={msg} />   */}
         </p>
      {/* */}
  
        {/* <MarkdownLite text={msg} /> */}
        {/* <span className={`text-xs mt-2 ${type === 'bot' && 'text-[#949494]'}`}>
          {time}
        </span> */}
      </div>
    </motion.div>
  );
}

export default function Messages({ messages }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  // const isMobile = useMediaQuery('(max-width: 600px)');
  useEffect(scrollToBottom, [messages]);

  return ( //prevoiusly: w-[600px] max-h-full
    <div className="w-flex max-h-96 overflow-y-scroll scrollbar-hide space-y-4" style={{
      '@media (max-width: 600px)': {
        fontSize: '1rem',
      },
      '@media (min-width: 601px)': {
        fontSize: '2rem',
      },
    }}>
      {messages.length ? (
        messages.map((message, index) => <Message key={index} {...message} />)
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-white text-sm">Ask the bot anything...</p>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
  // function Message({ msg, type, time }) {
  //   return (
  //     <motion.div
  //       initial={{ opacity: 0, y: 20 }}
  //       animate={{ opacity: 1, y: 0 }}
  //       className={`flex items-center ${
  //         type === 'bot' ? 'justify-start' : 'justify-end'
  //       }`}
  //     >
  //       <div
  //         className={`flex-grow flex-col items-start justify-center text-white rounded-xl p-4 ${
  //           type === 'bot'
  //             ? 'bg-[#3A3F47] rounded-tl-none'
  //             : 'bg-[#8AA1FF] rounded-br-none'
  //         }`}
  //       ><p>
  //         <MarkdownLite text={msg} /> 
  //       </p>
          
  //         <span className={`text-xs mt-2 ${type === 'bot' && 'text-[#949494]'}`}>
  //           {time}
  //         </span>
  //       </div>
  //     </motion.div>
  //   );
  // }
  
  // export default function Messages({ messages }) {
  //   const messagesEndRef = useRef(null);
  
  //   const scrollToBottom = () => {
  //     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  //   };
  
  //   useEffect(scrollToBottom, [messages]);
  
  //   return (
  //     <div className="w-flex max-h-96 overflow-y-scroll scrollbar-hide space-y-4">
  //       {messages.length ? (
  //         messages.map((message, index) => <Message key={index} {...message} />)
  //       ) : (
  //         <div className="flex items-center justify-center h-full">
  //           <p className="text-white text-sm">Ask the bot anything...</p>
  //         </div>
  //       )}
  //       <div ref={messagesEndRef} />
  //     </div>
  //   );
}
