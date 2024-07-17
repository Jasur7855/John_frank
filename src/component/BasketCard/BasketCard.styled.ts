import styled from "styled-components";

export const SCBasketCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: calc(2.6vw - 0.3px);
    margin-bottom: calc(2vw + 12.3px);
    .productInfo{
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr;
        align-items: center;
        
        flex-grow: 1000;
        .productDescription{
            
            display: flex;
            flex-direction: column;
            gap: calc(1vw - 0.12px);
            div{
                font-size: calc(0.5vw + 14px);
                font-weight: 500;
            }
            .article{
                color:rgba(0, 0, 0, 0.5);
                font-weight: 400;
            }
        }
        .productPrice{
            font-size:calc(0.5vw + 13.941px);
            font-weight: 500;
        }
        button{
            padding: 10px;
            background-color:white ;
            border: 1px solid rgba(228, 228, 228, 0.5);
            border-radius: 8px;
            display: block;
            width: 50px;
            cursor: pointer;
        }
    }

`