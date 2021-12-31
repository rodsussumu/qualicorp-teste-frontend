import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  form {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 30px 350px;
    background-color: #f0f0f0;
  }

  .button-submit {
    max-width: 200px;
    margin-top: 30px;
    align-self: center;
    height: 40px;
    border: none;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2rem;
  }

  .button-submit:hover {
    transition: 0.3s ease-in;
    background-color: #a1869e;
    color: #fff;
  }

  .input-form {
    margin-top: 20px;
  }

  .error {
    margin-top: 10px;
    font-weight: bold;
    color: red;
  }

  @media screen and (max-width: 1024px) {
    form {
      padding: 30px 60px;
    }
  }

  @media screen and (max-width: 768px) {
    display: block;

    .button-submit {
      width: 40%;
      font-size: 0.8rem;
    }
  }
`;
