import React from "react";
import AddUser from "./";

export default {
  title: "UserSummary/AddUser",
  component: AddUser,
  argTypes: {},
};

const Template = (args) => <AddUser {...args} />;

export const AddUserStory = Template.bind({});
