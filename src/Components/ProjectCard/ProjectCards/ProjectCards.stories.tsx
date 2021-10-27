
import ProjectCards, { Props } from "./ProjectCards";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "ProjectCards",
  component: ProjectCards,
};

export default meta;

const Template: Story<Props> = (args) => <ProjectCards {...args} />;
export const ProjectCardsdStories = Template.bind({});
