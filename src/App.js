import Header from "./Component/Header";
import NavBar from "./Component/Nav";
import Main from "./Component/Main";
import ContactUs from "./Component/ContactUs";
import Form from "./Component/Form";
import Provider from "./Context/provider";
import Footer from "./Component/Footer";
import FeacherTeam from "./Component/FeacherTeam";
import OurAchievements from "./Component/OurAchievements";
import AboutUs from "./Component/AboutUs";
import Testimonials from "./Component/Testimonials";
import Subscribe from "./Component/Subscribe";
import FAQ from "./Component/FAQ";

import { useState } from "react";

const App = () => {
  const [lgShow, setLgShow] = useState(false);
  const openMembershipForm=(value) => setLgShow(value)

  const [user, setUser] = useState({
    userEmail: "",
    userFullName: "",
    userId: "",
    userRole: "",
  });
  const userLoggedIn = (name, value) => {
    setUser((prevState) => {
      if (name.toString() === "userEmail") {
        return { ...prevState, userEmail: value };
      } else if (name.toString() === "userFullName") {
        return { ...prevState, userFullName: value };
      } else if (name.toString() === "userId") {
        return { ...prevState, userId: value };
      } else if (name.toString() === "userRole") {
        return { ...prevState, userRole: value };
      } else if (name.toString() === "membershipForm") {
        return { ...prevState, membershipForm: !user.membershipForm };
      }
    });
  };
  return (
    <>
      <Provider>
        <NavBar user={user} userLoggedIn={userLoggedIn} lgShow={lgShow} openMembershipForm={openMembershipForm}/>
          <main className="mt-0">
            <Header user={user}/>
            {user.userRole.toString()===""&& !localStorage.getItem("fullName")?<Main userLoggedIn={userLoggedIn} />:""}
            <FeacherTeam user={user} openMembershipForm={openMembershipForm}/>
        <OurAchievements />
        <AboutUs />
        <Testimonials />
        <Subscribe user={user}/>
        <FAQ />
            <ContactUs user={user} />
          </main>
          <Form lgShow={lgShow} openMembershipForm={openMembershipForm}/>
        <Footer/>
      </Provider>
    </>
  );
};
export default App;
