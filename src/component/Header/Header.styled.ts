import styled from "styled-components";

export const SCHeader = styled.div``;
export const SCHeaderTop = styled.div`
  background-color: #fce9d4;
  padding: 0 calc(5.2vw + 3.4px);
  text-align: center;
  padding: 16px 0;
  @media (max-width:699px) {
    display: none;
  }
`;
export const SCHeaderBottom = styled.div`
  padding: 25px calc(5.2vw + 3.4px);
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo{
    width: calc(16.8vw + 70.1px);
  }
  @media (max-width:699px) {
    .ant-space-item{
        display: none;
    }
  }
  
`;
export const SCHeaderRightMenu = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  .header_right_menu {
    display: flex;
    align-items: center;
    gap: 20px;
    img {
      cursor: pointer;
    }
  }
  @media (max-width: 1099px) {
    .header_right_menu {
      display: none;
    }
 
  }
`;
