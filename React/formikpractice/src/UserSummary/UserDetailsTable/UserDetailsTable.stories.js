import React from "react";
import UserDetailsTable from "./";

export default {
  title: "UserSummary/UserDetailsTable",
  component: UserDetailsTable,
  argTypes: {
    rows: { control: "array" },
  },
};

const Template = (args) => <UserDetailsTable {...args} />;

export const UserDetailsTableStory = Template.bind({});

UserDetailsTableStory.args = {
  rows: [
    {
      accounts: ["45444444444444444444444"],
      id: 1,
      limit: "4545454",
      product: {
        label: "Maker",
        value: "mt940",
      },
      role: {
        label: "Maker",
        value: "MAKER",
        class: "maker-menu-item",
      },
    },
  ],
};
