
import StudentCard, { Props } from "./StudentCard";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "StudentCard",
  component: StudentCard,
};

export default meta;

const Template: Story<Props> = (args) => <StudentCard {...args} />;
export const StudentCardStories = Template.bind({});
