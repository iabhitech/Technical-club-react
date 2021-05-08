import Head from "./Component/Head";
import Header from "./Component/Header";
import NavBar from "./Component/Nav";
import Main from "./Component/Main";
import ContactUs from "./Component/ContactUs";
import Form from "./Component/Form";
import Provider from "./Context/provider";
import Footer from "./Component/Footer";

import { useState } from "react";

const App = () => {
  const [user, setUser] = useState({
    userEmail: "",
    userFullName: "",
    userId: "",
    userRole: "",
    membershipForm: false,
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
      {/* {localStorage.clear()} */}
      {/* {console.log(localStorage)} */}
      <Provider>
        <NavBar user={user} userLoggedIn={userLoggedIn} />
        {!user.membershipForm ? (
          <div>
            <Head />
            <Header />
            <Main userLoggedIn={userLoggedIn} />
            <ContactUs user={user} />
          </div>
        ) : (
          <Form />
        )}
        <Footer/>
      </Provider>
    </>
  );
};
export default App;
