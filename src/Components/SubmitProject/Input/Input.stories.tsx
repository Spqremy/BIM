
import { Props } from "./Input";
import Input from "./Input"
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "Input",
  component: Input,
};

export default meta;

const Template: Story<Props> = (args) => <Input {...args} />;
export const InputStories = Template.bind({});
