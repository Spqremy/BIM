import { Props } from "./Employee";
import Employee from "./Employee";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "Employee",
  component: Employee,
};

export default meta;

const Template: Story<Props> = (args) => <Employee {...args} />;
export const EmployeeStories = Template.bind({});
