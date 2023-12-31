import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import ConnectWallet from "./ConnectWallet/ConnectWallet";

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;
const StyledTopNavbar = styled.div`
  display: flex;
  gap: 8px;
  margin-right: 2rem;
  align-items: center;
  justify-content: center;
`;
const StyledNavbarTopItems = styled.div`
  color: white;
  font-weight: 600;
  font-size: 16px;
`;
const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <StyledTopNavbar>
            <StyledNavbarTopItems>
              <button className=" font-semibold text-base bg-[#3898FF] p-2 px-3 rounded-xl hover:scale-105 active:scale-95 transition-all">Raise Dispute </button>
            </StyledNavbarTopItems>
            {/* <StyledNavbarTopItems>Connect Wallet</StyledNavbarTopItems> */}
            <StyledNavbarTopItems>
              <ConnectWallet />
            </StyledNavbarTopItems>
          </StyledTopNavbar>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
