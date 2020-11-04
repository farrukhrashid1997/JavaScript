import React from "react";
import UserDetailsItem from "./";

export default {
  title: "UserSummary/UserDetailsItem",
  component: UserDetailsItem,
  argTypes: {
    user: { control: "object" },
  },
};

const Template = (args) => <UserDetailsItem {...args} />;

export const UserDetailsItemStory = Template.bind({});

UserDetailsItemStory.args = {
  user: {
    id: 1,
    userId: "farrukhrashid",
    firstName: "farrukh",
    lastName: "rashid",
    dateOfBirth: "18/8/2020",
    tokenType: "SMS OTP",
    email: "farrukhrashid97@gmail.com",
    mothersMaidenName: "adbc",
    location: "dubai",
    mobileNumber: "+971558836623",
    userGroup:"example",
    eidOrPassportNumber: "12345566",
  },
};
