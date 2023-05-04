
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, Header, MainContainer, CheckoutContainer, Volunteerpage, AdminDashboard, DBHome, DBDonations, DBItems, DBUsers, AboutUs } from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";

const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <AnimatePresence >
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            
            <Route path="/checkout" element={<CheckoutContainer />} />
            <Route path="/volunteerPage" element={<Volunteerpage />} />
            <Route path="/dashboard*" element={<AdminDashboard />} />
            <Route path="/aboutUs" element={<AboutUs/>}/>
            
            
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  )
}
export default App;