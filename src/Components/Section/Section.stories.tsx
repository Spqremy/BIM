import { Props } from "./Section";
import Section from "./Section";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "Section",
  component: Section,
};

export default meta;

const Template: Story<Props> = (args) => <Section {...args} />;
export const SectionStories = Template.bind({});
