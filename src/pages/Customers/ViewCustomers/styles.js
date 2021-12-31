import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  .customers {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 30px 40px;
    height: 100%;
    background-color: #f0f0f0;
  }

  .customer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 20px;
    font-size: 1.2rem;
    padding: 20px;
    border: none;
    box-sizing: border-box;
    border-radius: 15px;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    background: #fff;
    height: 80px;
  }

  .customer-data {
    display: flex;
    align-items: center;
  }

  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-left: 20px;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 768px) {
    .customer {
      display: flex;
      flex-direction: column;
    }
    .customer-data {
      margin: 10px 0px;
    }
  }
`;
