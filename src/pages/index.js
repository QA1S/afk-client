import Chat from "@/components/Chat";
// import  RadioGroupPopup  from '@/components/Popover';
// import Layout from '../components/Layout';
import LoginPage from "./login";
import ProtectedRoute from "../components/ProtectedRoute";
export default function Home() {
  return (
    // <Layout>
    //   <h1>Welcome to my website!</h1>

    <main className="w-flex items-center justify-center">
      {/* <ProtectedRoute path="/chat" component={Chat}> */}
      <LoginPage />
        {/* <h1 className="text-white">
          {" "}
          *This is trained on data up to June 2023
        </h1> */}

        {/* <Chat /> */}
      {/* </ProtectedRoute> */}
    </main>
    // </Layout>
  );
}
