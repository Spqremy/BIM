import { Props } from "./Votes";
import Votes from "./Votes";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "Benefit",
  component: Votes,
};

export default meta;

const Template: Story<Props> = (args) => <Votes {...args} />;
export const VotesStories = Template.bind({});
