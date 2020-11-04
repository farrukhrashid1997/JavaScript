import React from "react";
import TableChip from "./";

export default {
  title: "TableChip",
  component: TableChip,
  argTypes: {
    accountNumber: { control: "text" },
    label: { control: "text" },
  },
};

const Template = (args) => <TableChip {...args} />;

export const TableChipOne = Template.bind({});
TableChipOne.args = {
  accountNumber: "",
  label: "",
};
