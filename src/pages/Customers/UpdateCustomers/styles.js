import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 30px 150px;
  form {
    display: flex;
    flex-direction: column;
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
    padding: 30px 30px;
    .button-submit {
      width: 40%;
    }
  }
`;
