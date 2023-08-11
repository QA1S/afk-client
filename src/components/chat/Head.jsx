// const path = 'M157.87 0H51.14a9.59 9.59 0 0 0-9.58 9.58v91.26a62.95 62.95 0 1 0 125.89 0V9.58A9.59 9.59 0 0 0 157.87 0zm-53.36 159.21a58.43 58.43 0 0 1-58.36-58.37v-17h45.09V49.68A1.75 1.75 0 0 1 93 47.93h9.77V30.51H89.55a1.75 1.75 0 1 1 0-3.49h29.92a1.75 1.75 0 0 1 0 3.49h-13.21v17.42h9.25a1.76 1.76 0 0 1 1.75 1.75v34.19h45.62v17a58.43 58.43 0 0 1-58.37 58.34z'
// const Logo = props => {
//     return (
//       <svg viewBox="0 0 200 150" fill="none" {...props}>
//         <path
//           d={path}
//           fill="white"
//         />
//       </svg>
//     );
//   };
import PDLogo from './PD_Logo.png';
const Logo = props => {
  return (
    <a href="https://prepdoctors.ca/">
    <div>
      <img src="/download.svg" alt="Website Logo" style={{ width: '88px', height: 'auto', 'borderRadius': '10px' }} />
    </div>
    </a>
  );
};  
  export default function Head() {
    return (
      <div className="flex items-center">
        <Logo className="w-8 h-8" />
        {/* <div className="bg-[#10A37F] flex items-center justify-center p-4 rounded-2xl">
          <Logo className="w-8 h-8" />
        </div> */}
        <span className="text-white ml-4 text-lg">PrepDoctors Chatbot</span>
      </div>
    );
  }