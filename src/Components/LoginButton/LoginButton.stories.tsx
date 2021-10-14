
import LoginButton, { Props } from "./LoginButton";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "LoginButton",
  component: LoginButton,
};

export default meta;

const Template: Story<Props> = (args) => <LoginButton {...args}/>;
export const LoginButtonStories = Template.bind({});
