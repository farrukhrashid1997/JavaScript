import React from "react";
import UserExpansionPanel from "./";

export default {
  title: "UserSummary/UserExpansionPanel",
  component: UserExpansionPanel,
  argTypes: {
    user: { control: "object" },
  },
};

const Template = (args) => <UserExpansionPanel {...args} />;

export const UserExpansionPanelStory = Template.bind({});
UserExpansionPanelStory.args = {
  user: {
    id: 1,
    userId: "farrukhrashid",
    firstName: "farrukh",
    lastName: "rashid",
    tokenType: "SMS OTP",
    userAccesses: [
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
  },
};
