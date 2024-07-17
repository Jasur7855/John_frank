import { calc } from "antd/es/theme/internal";
import { BasketCard } from "../../component/BasketCard/BasketCard";
import { Header } from "../../component/Header/Header";
import { BiSolidDiscount } from "react-icons/bi";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { Counter } from "../../component/UI/Counter/Counter";
import {
  SCBasketPageMain,
  SCPersonalInfoWrapper,
} from "./BasketPageMain.styled";
import { AppInput } from "../../component/UI/AppInput/AppInput";

export const BasketPage = () => {
  return (
    <div>
      <Header />
      <SCBasketPageMain>
        <h1>Главная {">"} Корзина</h1>
        <h2>корзина</h2>
        <div
          style={{
            borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
            marginBottom: "calc(3.3vw + 7.5px)",
          }}
        >
          <BasketCard
            cardImg="../../../public/img/BasketCardImg.png"
            productArticle="Артикул: 43296"
            productColor="Черный"
            productName="Футболка в полоску"
            productPrice={214990}
          />
          <BasketCard
            cardImg="../../../public/img/BasketCardImg.png"
            productArticle="Артикул: 43296"
            productColor="Черный"
            productName="Футболка в полоску"
            productPrice={214990}
          />
          <BasketCard
            cardImg="../../../public/img/BasketCardImg.png"
            productArticle="Артикул: 43296"
            productColor="Черный"
            productName="Футболка в полоску"
            productPrice={214990}
          />
        </div>
        <SCPersonalInfoWrapper>
          <div className="personalInfoForm">
            <h2>Персональная информация</h2>
            <form action="">
              <AppInput inputType={"text"} inputPlaceholder={"Имя"} />
              <AppInput inputType={"text"} inputPlaceholder={"Фамилия"} />
              <AppInput inputType={"email"} inputPlaceholder={"Почта"} />
              <AppInput inputType={"tel"} inputPlaceholder={"Телефон"} />
              <AppInput inputType={"text"} readOnly={true} value={"Шайхантахурский район, ул. Зарграр 4"}/>
            </form>
          </div>
          <div>
            <div className="productBuyInfo">
              <div className="productBuyItem">
                <div className="productTitle">Товаров:</div>
                <div className="productSubtitle">2</div>
              </div>
              <div className="productBuyItem">
                <div className="productTitle">Доставка:</div>
                <div className="productSubtitle">0 сум</div>
              </div>
              <div className="productBuyItem">
                <div className="productTitle">Итого:</div>
                <div className="productSubtitle">143 990</div>
              </div>
              <div className="promoCode">
                <BiSolidDiscount size={24} />
                <span>Введите промокод</span>
              </div>
            </div>
            <button className="buyBtn">
              <div>
                <LiaCheckDoubleSolid />
              </div>
              Оплатить заказ
            </button>
            <p>Нажимая на кнопку «оплатить заказ», я принимаю условия публичной офертыи политики конфиденциальности</p>
          </div>
        </SCPersonalInfoWrapper>
      </SCBasketPageMain>
    </div>
  );
};
