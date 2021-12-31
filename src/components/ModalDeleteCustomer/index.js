import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { FiCheckCircle } from "react-icons/fi";
import { FormSection, MsgSuccess } from "./styles";
import { useForm } from "react-hook-form";
import api from "../../api";

import CircularProgress from "@material-ui/core/CircularProgress";

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

export default function ModalDelete({ openModal, setOpenModal, id, refresh }) {
  const {
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm();
  const [success, setSuccess] = React.useState(false);
  const [load, setLoad] = React.useState(false);
  const [errorApi, setErrorApi] = React.useState(false);

  const handleClickOpen = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const onSubmit = (data) => {
    api
      .delete(`/customer/${id}`)
      .then((resp) => refresh())
      .catch((error) => console.log(error));
  };

  React.useEffect(() => {
    setSuccess(false);
  }, [openModal]);

  return (
    <div>
      <Dialog
        onClose={handleCloseModal}
        aria-labelledby="customized-dialog-title"
        open={openModal}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleCloseModal}>
          Deletar cliente
        </DialogTitle>
        <DialogContent dividers>
          {success ? (
            <MsgSuccess>
              <div className="icon-area">
                <FiCheckCircle />
              </div>
              <div className="message">Cliente deletado com sucesso</div>
            </MsgSuccess>
          ) : (
            <FormSection>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="div-input">
                  <div>
                    <div className="actual-email">
                      O cliente selecionado será excluido permanentemente,
                      deseja continuar?
                    </div>
                    {errorApi && <span className="error-msg">{errorApi}</span>}
                  </div>
                </div>
                <div className="buttons">
                  <button type="submit" className="btn">
                    <span>Confirmar</span>{" "}
                    {load && <CircularProgress size={15} />}{" "}
                  </button>
                  <button
                    className="btn btn-delete"
                    onClick={() => {
                      setSuccess(false);
                      setOpenModal(false);
                    }}
                  >
                    {" "}
                    <span>Cancelar</span>{" "}
                    {load && <CircularProgress size={15} />}{" "}
                  </button>
                </div>
              </form>
            </FormSection>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
