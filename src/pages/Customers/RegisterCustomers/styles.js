import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  form {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 30px 40px;
    height: 100vh;
    background-color: #f0f0f0;
  }

  .button-submit {
    width: 40%;
    margin-top: 30px;
    align-self: center;
    height: 40px;
    border: none;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
  }

  .input-form {
    margin-top: 20px;
  }

  .error {
    margin-top: 10px;
    font-weight: bold;
    color: red;
  }

  @media screen and (max-width: 768px) {
    .button-submit {
      width: 40%;
    }
  }
`;
