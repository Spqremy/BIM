
import { Props } from "./AddFiles";
import AddFiles from "./AddFiles"
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "AddFiles",
  component: AddFiles,
};

export default meta;

const Template: Story<Props> = (args) => <AddFiles {...args} />;
export const AddFilesStories = Template.bind({});
