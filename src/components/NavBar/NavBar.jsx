import React from "react";
import styled from "styled-components";
import { color } from "../../containers/tools";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const NavbarConatainer = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${color.backColor};
  box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);
  z-index: 50;
`;
const Icon = styled(FontAwesomeIcon)`
  color: ${color.grayFont};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-left: 10%;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
  &:last-of-type {
    margin-right: 10%;
  }
`;

function NavBar({ handleInfoOpen, handleOpen }) {
  return (
    <NavbarConatainer>
      <Icon icon={faEllipsisV} onClick={handleInfoOpen} />
      <Icon icon={faBars} onClick={handleOpen} />
    </NavbarConatainer>
  );
}

export default NavBar;
