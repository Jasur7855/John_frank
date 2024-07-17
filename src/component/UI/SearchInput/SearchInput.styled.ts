import styled from "styled-components";

export const SCSearchInput = styled.div`
  width: 200px;
  padding: 8px 12px;
  border: 1px solid #e4e4e480;
  border-radius: 4px;
  display: flex;
  gap: 12px;
  background-color: rgba(228, 228, 228, 0.5);
  input {
    background-color: transparent;
    outline: none;
    border: none;

  }
  @media (max-width: 899px) {
    width:34px;
    display: block;
    padding: 0;
    background-color: transparent;
    border: none;
    input {
      display: none;
    }
  }
`;