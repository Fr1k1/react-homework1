import styled from "styled-components";
import { breakpoints, colors } from "../../utils/styles/theme";
import { ReactComponent as HamburgerIcon } from "../../assets/images/icon-hamburger.svg";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";

export const Header = styled.header`

background-color: ${colors.bgSecondary};
`;

export const HeaderInner = styled.div`

    height: 80px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 24px;

    @media screen and (${breakpoints.tablet}) {
      padding: 0 32px;
    }

    @media screen and (${breakpoints.desktop}) {
      padding: 0;
      max-width: 930px;
      margin: 0 auto;
    }

    @media screen and (${breakpoints.desktopLarge}) {

      max-width: 1280px;

    }


`;

export const Hamburger = styled(HamburgerIcon)`

    display: block;
    width: 32px;
    height: 32px;

    @media screen and (${breakpoints.desktop}) {
      display: none;
    }
`;

export const LogoImg = styled(Logo)`

path {
    fill: ${colors.primary};

}

`;

export const HeaderLink = styled(NavLink)`//ovo tu je nasljedivanje ()
 margin-right: 32px;
    line-height: 80px;
    transition: color 0.3s ease-out;

    &:hover {
        color:${colors.primary};
    }


  @media screen and (max-width: 1023px) {
    margin-right: 0;
  }

`;

export const HeaderNav = styled.nav`

  @media screen and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1000;
    margin-left: 50px;
    margin-right: 50px;
    position: absolute;
    align-items: center;
    text-align: center;
    WIDTH: 100% !important;
    left: -3.1rem;
    top: 0rem;
    background-color: white;

    padding-bottom: 10px;
  }

  @media screen and (${breakpoints.desktop}) {
    display: flex;
    align-items: center;
  }
`;




