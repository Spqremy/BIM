
import { Button, Props } from "./Button";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "StartButton",
  component: Button,
};

export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;
export const ButtonStories = Template.bind({});
