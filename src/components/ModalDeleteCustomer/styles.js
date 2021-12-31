import styled from "styled-components";

export const FormSection = styled.div`
  min-width: 570px;
  .div-input {
    display: flex;
    align-items: center;
  }
  .error-msg {
    color: #f7365a;
    font-size: 13px;
    margin-bottom: 5px;
    display: inline-block;
  }
  .input-default {
    display: flex;
    font-size: 1rem;
    background-color: #fff;
    border: 0.5px solid #9354ff;
    border-radius: 10px;
    width: 100%;
    height: 33px;
    color: #3b3838;
    justify-content: center;
    box-sizing: border-box;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    margin-bottom: 20px;
  }
  .input-default.active {
    background: rgba(110, 62, 193, 0.8);
    color: #fff;
  }
  .actual-email {
    color: #3b3838;
    margin-bottom: 10px;
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
  }
  .btn-delete {
    margin-left: 20px;
  }
`;

export const MsgSuccess = styled.div`
  min-width: 570px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 10px 20px 10px;
  .icon-area {
    font-size: 3rem;
    color: #6e3ec1;
  }
  .message {
    font-size: 1.5rem;
    font-family: "Avenir Next GEO W05 bold";
  }
`;
