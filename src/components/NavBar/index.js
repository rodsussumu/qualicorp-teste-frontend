import React, { useState } from "react";
import { Bars, Nav, Times } from "./styles";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Nav>
        <Bars onClick={() => setOpen(!open)} />
        <div className={open ? "nav-menu open" : "nav-menu"}>
          <Times onClick={() => setOpen(!open)} />
          <div className="nav-link" to="/create/customers">
            <a href="/create/customers">Criar</a>
          </div>
          <div className="nav-link">
            <a href="/all/customers">Clientes</a>
          </div>
        </div>
      </Nav>
    </>
  );
}
