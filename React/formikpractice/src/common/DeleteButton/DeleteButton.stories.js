import React from "react";
import DeleteButton from "./";

export default {
  title: "DeleteButton",
  component: DeleteButton,
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
};

const Template = (args) => <DeleteButton {...args} />;

export const DeleteButtonOne = Template.bind({});
DeleteButtonOne.args = { onClick: {} };
