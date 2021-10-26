
import Testimonial, { Props } from "./Testimonial";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "Testimonial",
  component: Testimonial,
};

export default meta;

const Template: Story<Props> = (args) => <Testimonial {...args} />;
export const TestimonialStories = Template.bind({});
