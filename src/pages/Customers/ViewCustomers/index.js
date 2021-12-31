import React, { useState, useEffect } from "react";
import api from "../../../api";
import ModalCustomer from "../../../components/ModalCustomer";
import { Wrapper } from "./styles";
import { GrView } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import ModalDelete from "../../../components/ModalDeleteCustomer";

export default function ViewCustomers() {
  const [customers, setCustomers] = useState([]);
  const [customer, setCustomer] = useState();
  const [customerDelete, setCustomerDelete] = useState();

  const [modal, setModal] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  const getCustomers = () => {
    api
      .get("/customer")
      .then((resp) => setCustomers(resp.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <>
      <Wrapper>
        <div className="customers">
          {customers.map((e, index) => {
            return (
              <>
                <div className="customer">
                  <div className="customer-data">{e.nome}</div>
                  <div className="customer-data">{e.sobrenome}</div>
                  <div className="customer-data">{e.email}</div>
                  <GrView
                    onClick={() => {
                      setModal(true);
                      setCustomer(e._id);
                    }}
                  />

                  <MdDelete
                    onClick={() => {
                      setModalDelete(true);
                      setCustomerDelete(e._id);
                    }}
                  />
                </div>
              </>
            );
          })}
        </div>
      </Wrapper>
      <ModalCustomer openModal={modal} setOpenModal={setModal} id={customer} />
      <ModalDelete
        openModal={modalDelete}
        setOpenModal={setModalDelete}
        id={customerDelete}
        refresh={getCustomers}
      />
    </>
  );
}