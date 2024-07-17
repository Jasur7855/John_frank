import {SearchOutlined } from "@ant-design/icons"
import {SCSearchInput} from "./SearchInput.styled"
export const SearchInput = () => {
    return (
        <SCSearchInput>
            <SearchOutlined style={{fontSize:"24px"}}/>
            <input type="text" />
        </SCSearchInput>
    );
};

