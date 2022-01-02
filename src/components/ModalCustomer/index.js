import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

import { Data } from "./styles";
import api from "../../api";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  title: {
    color: "#3B3838",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography className={classes.title} variant="h6">
        {children}
      </Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function ModalCustomer({ openModal, setOpenModal, id }) {
  const [customer, setCustomer] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    cpf: "",
    cep: "",
    endereco: "",
    estado: "",
    cidade: "",
    bairro: "",
    numero: "",
    complemento: "",
  });

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const getCustomer = () => {
    api
      .get(`/customer/${id}`)
      .then((resp) => {
        setCustomer(resp.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCustomer();
  }, [openModal]);

  return (
    <div>
      <Dialog
        onClose={handleCloseModal}
        aria-labelledby="customized-dialog-title"
        open={openModal}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleCloseModal}>
          Dados do cliente
        </DialogTitle>
        <DialogContent dividers>
          <Data>
            <div className="data-customer">
              Nome: {customer.nome} {customer.sobrenome}
            </div>
            <div className="data-customer">Email: {customer.email}</div>
            <div className="data-customer">Telefone: {customer.telefone}</div>
            <div className="data-customer">CPF: {customer.cpf}</div>
            <div className="data-customer">
              Endereco:{" "}
              {` ${customer.endereco}, ${customer.numero} ${customer.complemento} - ${customer.bairro}, ${customer.cidade} - ${customer.estado}`}
            </div>
          </Data>
        </DialogContent>
      </Dialog>
    </div>
  );
}
