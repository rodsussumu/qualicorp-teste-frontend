import React, { useState } from "react";
import { Bars, Nav, Times, Back } from "./styles";
import { useHistory } from "react-router-dom";
export default function Navbar({ visible }) {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  return (
    <>
      <Nav>
        <Back
          className={visible ? "visible" : ""}
          onClick={() => {
            history.goBack();
          }}
        />
        <Bars onClick={() => setOpen(!open)} />
        <div className={open ? "nav-menu open" : "nav-menu"}>
          <Times onClick={() => setOpen(!open)} />
          <div className="nav-link">
            <a href="/create/customers">Adicionar cliente</a>
          </div>
          <div className="nav-link">
            <a href="/all/customers">Clientes</a>
          </div>
        </div>
      </Nav>
    </>
  );
}
