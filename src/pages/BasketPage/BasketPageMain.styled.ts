import { styled } from "styled-components";

export const SCBasketPageMain = styled.div`
  padding: calc(0.9vw + 32.4px) calc(11.8vw - 26.3px) calc(15.8vw - 12.3px);
  background-color: rgba(243, 243, 242, 1);
  h1 {
    font-size: calc(0.5vw + 18px);
    font-weight: 400;
    padding-bottom: calc(2vw + 12.3px);
  }
`;

export const SCPersonalInfoWrapper = styled.div`
  display: flex;
  gap:50px;
  
  .personalInfoForm {
    flex-grow: 1000;
    form {
      display: flex;
      flex-direction: column;
      gap: calc(0.7vw + 7.4px);
    }
  }
  .productBuyInfo {
    flex-basis: 300px;
    background-color: rgba(255, 255, 255, 0.44);
    padding: 20px 24px;
    border: 1px solid rgba(228, 228, 228, 0.5);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap:24px;
    margin-bottom: 20px;
    .productBuyItem{
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size:16px;
      
      .productSubtitle{
        font-weight: 500;
        font-size:calc(0.5vw + 14.2px);
      }
    }
    .promoCode{
      background-color: white;
      padding: 15px 20px;
      display: flex;
      align-items: center;
      gap: 5px;
      cursor: pointer;
      width:100%
    }
  }
  .buyBtn{
    width: 100%;
    background-color: black;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    color:white;
    padding: 12px 0;
    cursor: pointer;
    padding-bottom: 20px;
    margin-bottom: 20px;
    div{
      background-color: gray;
      padding: 6px;
      border-radius: 8px;
    }
  }
  p{
    max-width: 300px;
    font-size: 11px;
    line-height: 13.41px;
    text-align: left;
  }
`;
