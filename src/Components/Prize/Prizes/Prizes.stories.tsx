import { Props } from "./Prizes";
import Prizes from "./Prizes";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "Benefit",
  component: Prizes,
};

export default meta;

const Template: Story<Props> = (args) => <Prizes {...args} />;
export const PrizesStories = Template.bind({});
