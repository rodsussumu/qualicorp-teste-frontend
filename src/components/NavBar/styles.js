import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 10;

  .nav-menu {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    margin-right: -24px;
    width: 100%;
    justify-content: space-around;
    height: 80px;
    .nav-link {
      display: flex;
      justify-content: space-between;
      width: 100%;
      a {
        text-decoration: none;
        color: #fff;
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: center;
        font-size: 1.2rem;
      }
      a:hover {
        transition: 0.3s ease-in;
        background-color: #a1869e;
      }
    }

    @media screen and (max-width: 768px) {
      display: flex;
      flex-diretion: column;
      align-items: center;
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
    top: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
