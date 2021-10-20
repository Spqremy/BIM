
import { Props } from "./Labelinput";
import Labelinput from "./Labelinput"
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "Labelinput",
  component: Labelinput,
};

export default meta;

const Template: Story<Props> = (args) => <Labelinput {...args} />;
export const LabelinputStories = Template.bind({});
