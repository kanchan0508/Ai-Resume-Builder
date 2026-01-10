import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import Header from "./components/custom/Header";
import { Toaster } from "./components/ui/sonner";
import Footer from "./home/Footer";
import ReviewSection from "./components/custom/ReviwSection";

function App() {
  const [count, setCount] = useState(0);
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isSignedIn && isLoaded) {
    return <Navigate to={"/auth/sign-in"} />;
  }
  return (
    < >
    
      <Header />
      <div className="pt-36 min-h-screen">
        <Outlet />
      </div>
      <Footer />
      <Toaster />
      
    </>
  );
}

export default App;
