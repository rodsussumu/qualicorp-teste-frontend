import styled from "styled-components";

export const FormSection = styled.div`
  min-width: 570px;
  .div-input {
    display: flex;
    align-items: center;
  }

  button.btn {
    font-family: "Avenir Next GEO W05 bold";
    padding: 7px 15px;
    background: #f3ecff;
    border: 1px #8f6ad1 solid;
    border-radius: 5px;
    color: #6e3ec1;
    cursor: pointer;
    display: flex;
    align-items: center;
    :hover {
      background: #e3d2ff;
    }
    :disabled {
      opacity: 0.5;
    }
    span {
      color: inherit;
    }
    .MuiCircularProgress-root {
      margin-left: 10px;
    }
  }
  button.btn-clear {
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f76767;
    margin-right: 1rem;
    cursor: pointer;
  }
  .buttons {
    display: flex;
    margin-top: 20px;
  }
  .btn-delete {
    margin-left: 20px;
  }
`;
