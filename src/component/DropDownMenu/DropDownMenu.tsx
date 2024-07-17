import React from "react";
import { Select, Space } from "antd";
interface IDropDownItem {
  value: string;
  label: string;
}

interface IDropDownMenu {
  dropDownOption: IDropDownItem[];
  defaultValue: string;
}
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

export const DropDownMenu: React.FC<IDropDownMenu> = ({
  dropDownOption,
  defaultValue,
}) => (
  <Space wrap >
    <Select
      defaultValue={defaultValue}
      style={{ display: "inline-block", minHeight: 45, border: 0 }}
      onChange={handleChange}
      options={dropDownOption}
    />
    
  </Space>
);
