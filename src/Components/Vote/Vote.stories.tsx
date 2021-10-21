
import Vote, { Props } from "./Vote";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "Vote",
  component: Vote,
};

export default meta;

const Template: Story<Props> = (args) => <Vote {...args}/>;
export const VoteStories = Template.bind({});
