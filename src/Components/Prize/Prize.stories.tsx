
import Prize, { Props } from "./Prize";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "Prize",
  component: Prize,
};

export default meta;

const Template: Story<Props> = (args) => <Prize {...args} />;
export const PrizeStories = Template.bind({});
