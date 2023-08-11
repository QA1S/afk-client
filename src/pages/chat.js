import Chat from "@/components/Chat";
// import { m } from "framer-motion";
import ProtectedRoute from './api/auth/ProtectedRoute';

export default function Home() {
  return (
    <main className="w-flex items-center justify-center">
      <ProtectedRoute>
      <h1 className="text-white">
          {" "}
          *This is trained on data up to June 2023
        </h1>

        <Chat />
    </ProtectedRoute>
        
     
    </main>
    
  );
}