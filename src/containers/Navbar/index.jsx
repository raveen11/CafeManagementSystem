import React from "react";
import { useNavigate } from "react-router";
import StyledButton from "../../components/elements/Button";
import localDb from "../../global/localStorage";
import { NavbarWrapper } from "./style";

const Navbar = () => {
  const navigate = useNavigate(); // Get the navigate function
  const isLoggedIn = localDb.getSessions();

  console.log("ABCD-isLoggedIn", isLoggedIn);
  return (
    <NavbarWrapper>
      Navbar
      {isLoggedIn ? (
        <StyledButton
          styleObj={{ height: "40px", width: "100px", radius: "20px" }}
          buttonName="Logout"
          onClick={() => {
            navigate("/login");
            localDb.setSessions(undefined);
          }}
        />
      ) : (
        <StyledButton
          styleObj={{ height: "40px", width: "100px", radius: "20px" }}
          buttonName="Login"
          onClick={() => navigate("/login")}
        />
      )}
    </NavbarWrapper>
  );
};

export default Navbar;
