import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { FormSection } from "./styles";
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

export default function ModalDelete({ openModal, setOpenModal, id, refresh }) {
  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const onSubmit = () => {
    api
      .delete(`/customer/${id}`)
      .then((resp) => {
        refresh();
        handleCloseModal();
      })
      .catch((error) => console.log(error));
  };

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
          <FormSection>
            <div className="delete">
              <div className="div-input">
                <div>
                  <div className="actual-email">
                    O cliente selecionado será excluido permanentemente, deseja
                    continuar?
                  </div>
                </div>
              </div>
              <div className="buttons">
                <button
                  type="submit"
                  className="btn"
                  onClick={() => {
                    onSubmit();
                  }}
                >
                  <span>Confirmar</span>
                </button>
                <button
                  className="btn btn-delete"
                  onClick={() => {
                    setOpenModal(false);
                  }}
                >
                  <span>Cancelar</span>
                </button>
              </div>
            </div>
          </FormSection>
        </DialogContent>
      </Dialog>
    </div>
  );
}
