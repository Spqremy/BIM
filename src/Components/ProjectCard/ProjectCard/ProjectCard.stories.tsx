
import ProjectCard, { Props } from "./ProjectCard";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "ProjectCard",
  component: ProjectCard,
};

export default meta;

const Template: Story<Props> = (args) => <ProjectCard {...args} />;
export const ProjectCardStories = Template.bind({});
