import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Logo } from '../components/common/Logo'


export default {
    title: "Example/Logo",
    component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    formLabel: "Due Date"
};