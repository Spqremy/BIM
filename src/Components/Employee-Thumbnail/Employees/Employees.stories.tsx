import { Props } from "./Employees";
import Employees from "./Employees";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "Employees",
  component: Employees,
};

export default meta;

const Template: Story<Props> = (args) => <Employees {...args} />;
export const EmployeesStories = Template.bind({});
