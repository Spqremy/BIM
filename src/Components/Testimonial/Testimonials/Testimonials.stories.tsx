import { Props } from "./Testimonials";
import Testimonials from "./Testimonials";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "Testimonials",
  component: Testimonials,
};

export default meta;

const Template: Story<Props> = (args) => <Testimonials {...args} />;
export const TestimonialsStories = Template.bind({});
