import { Props } from "./Benefits";
import Benefits from "./Benefits";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "Benefit",
  component: Benefits,
};

export default meta;

const Template: Story<Props> = (args) => <Benefits {...args} />;
export const BenefitsStories = Template.bind({});
