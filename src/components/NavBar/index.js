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
          <div className="nav-link" to="/customers">
            Criar
          </div>
          <div className="nav-link" to="/customers">
            Listar
          </div>
          <div className="nav-link" to="/customers">
            Atualizar
          </div>
          <div className="nav-link" to="/customers">
            Deletar
          </div>
        </div>
      </Nav>
    </>
  );
}
