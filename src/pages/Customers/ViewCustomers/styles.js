import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 30px 150px;
  background-color: #efefef;
  .customers {
    display: flex;
    flex-direction: column;
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
  }

  @media screen and (max-width: 768px) {
    padding: 30px 30px;
    .customer {
      display: flex;
      flex-direction: column;
    }
    .customer-data {
      margin: 10px 0px;
    }
  }
`;
