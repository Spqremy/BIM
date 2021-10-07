
import { Props } from "./Nav";
import Nav from "./Nav"
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "Nav",
  component: Nav,
};

export default meta;

const Template: Story<Props> = (args) => <Nav {...args} />;
export const NavStories = Template.bind({});
