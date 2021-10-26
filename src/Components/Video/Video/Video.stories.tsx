
import { Props } from "./Video";
import Video from "./Video"
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "Video",
  component: Video,
};

export default meta;

const Template: Story<Props> = (args) => <Video {...args} />;
export const VideoStories = Template.bind({});
