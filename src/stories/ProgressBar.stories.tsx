import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Progressbar } from '../components/common/Progressbar'


export default {
    title: "Example/Progressbar",
    component: Progressbar,
} as ComponentMeta<typeof Progressbar>;

const Template: ComponentStory<typeof Progressbar> = (args) => <Progressbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    progressInfo: '60',
};