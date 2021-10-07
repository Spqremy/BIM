import { Props } from "./Benefit";
import Benefit from "./Benefit";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "Benefit",
  component: Benefit,
};

export default meta;

const Template: Story<Props> = (args) => <Benefit {...args} />;
export const BenefitStories = Template.bind({});
