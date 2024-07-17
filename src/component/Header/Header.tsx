import { DropDownMenu } from "../DropDownMenu/DropDownMenu";
import {
  SCHeader,
  SCHeaderTop,
  SCHeaderBottom,
  SCHeaderRightMenu,
} from "./Header.styled";
import { MenuOutlined } from "@ant-design/icons";
import Logo from "../../../public/img/Logo.png";
import User from "../../../public/img/svg/User.svg";
import Basket from "../../../public/img/svg/Basket.svg";
import Bookmark from "../../../public/img/svg/Bookmark.svg";
import { SearchInput } from "../UI/SearchInput/SearchInput";

const langStore = [
  { value: "Ru", label: "Ru" },
  { value: "Uz", label: "Uz" },
];
export const Header = () => {
  return (
    <SCHeader>
      <SCHeaderTop>
        <a href="#">Доставку в вашу страну</a> можно оформить на международной
        версии сайта
      </SCHeaderTop>
      <SCHeaderBottom>
        <div>
          <MenuOutlined style={{ cursor: "pointer", marginRight: "20px" }} />
          <DropDownMenu dropDownOption={langStore} defaultValue="Ru"/>
        </div>
        <img className="logo" src={Logo} alt="Лого компании" />
        <SCHeaderRightMenu>
          <SearchInput />
          <div className="header_right_menu">
            <img src={User} alt="кнопка для регистрации" />
            <img src={Basket} alt="Корзина" />
            <img src={Bookmark} alt="Избранное" />
          </div>
        </SCHeaderRightMenu>
      </SCHeaderBottom>
    </SCHeader>
  );
};
