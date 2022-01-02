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
    align-items: center;
  }

  .customer {
    display: grid;
    width: 800px;
    grid-template-columns: 250px 250px 250px;
    grid-gap: 10px;
    margin-top: 20px;
    font-size: 1.2rem;
    padding: 20px;
    border: none;
    box-sizing: border-box;
    border-radius: 15px;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    background: #fff;
  }

  .customer-data {
    display: flex;
    align-items: center;
    word-break: break-word;
  }

  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      padding: 0px 20px;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 768px) {
    display: block;
    .customer {
      display: flex;
      flex-direction: column;
      height: 200px;
      width: 100%;
    }

    .icons {
      margin-top: 20px;
      justify-content: flex-start;
      svg {
        padding: 0px;
        padding-right: 20px;
      }
    }
    .customer-data {
      margin: 10px 0px;
    }
  }
`;
