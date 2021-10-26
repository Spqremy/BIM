import { Props } from "./PageHero";
import PageHero from "./PageHero";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "PageHero",
  component: PageHero,
};

export default meta;

const Template: Story<Props> = (args) => <PageHero {...args} />;
export const PageHeroStories = Template.bind({});
