import React from "react";
import AccountTable from "./";

export default {
  title: "AccountTable",
  component: AccountTable,
  argTypes: {
    groups: { control: "array" },
    accounts: { control: "object" },
  },
};

const Template = (args) => <AccountTable {...args} />;

export const AccountTableOne = Template.bind({});
AccountTableOne.args = {
  groups: [["gpssa", "payroll", "ratibi"]],
  accounts: {
    4544444444444444: ["mt940"],
  },
};
