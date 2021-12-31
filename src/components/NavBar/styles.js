import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 10;

  .nav-menu {
    display: flex;
    align-items: center;
    margin-right: -24px;
    white-space: nowrap;
    width: 100%;
    @media screen and (max-width: 768px) {
      height: 100%;
      width: 50%;
      position: fixed;
      background: #000;
      flex-direction: column;
      right: 0;
      margin-right: -400px;
    }
  }

  .open {
    transition: 0.2s ease-in;
    margin-right: 0px;
    z-index: 10;
  }

  .nav-link {
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    width: 100%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    &.active {
      color: #15cdfc;
    }
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const Times = styled(FaTimes)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
