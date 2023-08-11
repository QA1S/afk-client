import React from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import breaks from 'remark-breaks'


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

const MarkdownLite = ({ text }) => {
  return (
    <ReactMarkdown components={{ a: LinkRenderer }} plugins={[breaks]}>{text}</ReactMarkdown>
  )
}

export default MarkdownLite
// const MarkdownLite = ({ text }) => {
//   const linkRegex = /\[(.+?)\]\((.+?)\)/g
//   const parts = []

//   let lastIndex = 0
//   let match
//   // let divElement = React.createElement('div', {dangerouslySetInnerHTML: {__html: text}});

//   while ((match = linkRegex.exec(text)) !== null) {
//     const [fullMatch, linkText, linkUrl] = match
//     const matchStart = match.index
//     const matchEnd = matchStart + fullMatch.length

//     if (lastIndex < matchStart) {
//       parts.push(text.slice(lastIndex, matchStart))
//     }

//     parts.push(
//       <Link
//         target='_blank'
//         rel='noopener noreferrer'
//         className='break-words underline underline-offset-2 text-blue-600'
//         key={linkUrl}
//         href={linkUrl}>
//         {linkText}
//       </Link>
//     )

//     lastIndex = matchEnd
//   }

//   if (lastIndex < text.length) {
//     parts.push(text.slice(lastIndex))
//   }

//   return (
//     <>
//       {parts.map((part, i) => (
//       //   <React.Fragment key={i}>
        
//       //   {divElement}
//       // </React.Fragment>
//       React.createElement('div', {dangerouslySetInnerHTML: {__html: <React.Fragment key={i}>{part}</React.Fragment>}})

//         // <React.Fragment key={i}>{part}</React.Fragment>
//       ))}
//     </>
//   )
// }
