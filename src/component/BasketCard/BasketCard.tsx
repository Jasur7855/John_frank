import React, { useState } from "react";
import { DropDownMenu } from "../DropDownMenu/DropDownMenu";
import { SCBasketCard } from "./BasketCard.styled";
import { Counter } from "../UI/Counter/Counter";
import { FaRegTrashAlt } from "react-icons/fa";

interface IBasketCard {
  cardImg: string;
  productName: string;
  productArticle: string;
  productColor: string;
  productPrice: number;
}
const sizeStore = [
  { value: "XXS", label: "XXS" },
  { value: "XS-S", label: "XS-S" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "M-L", label: "M-L" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
];
export const BasketCard: React.FC<IBasketCard> = ({
  cardImg,
  productName,
  productArticle,
  productColor,
  productPrice,
}) => {
  const [count, setCount] = useState(1);

  return (
    <SCBasketCard>
      <img src={cardImg} alt="картинка товара" />
      <div className="productInfo">
        <div className="productDescription">
          <div className="productName">{productName}</div>
          <div className="article">{productArticle}</div>
        </div>
        <div className="productColor">{productColor}</div>
        <DropDownMenu dropDownOption={sizeStore} defaultValue="Размер" />
        <Counter
          increment={() => setCount(count + 1)}
          decrement={() => setCount(count > 1 ? count - 1 : 0)}
          count={count}
        />
        <div className="productPrice">{productPrice * count} сум</div>
        <button>
          <FaRegTrashAlt size={24} />
        </button>
      </div>
    </SCBasketCard>
  );
};
