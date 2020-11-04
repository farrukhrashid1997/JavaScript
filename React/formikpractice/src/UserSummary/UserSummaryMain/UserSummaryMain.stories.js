import React from "react";
import UserSummaryMain from "./";

export default {
  title: "UserSummary/UserSummaryMain",
  component: UserSummaryMain,
  argTypes: {},
};

const Template = (args) => <UserSummaryMain {...args} />;

export const UserSummaryMainStory = Template.bind({});
// UserSummaryMainOne.args = {};
