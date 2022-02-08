import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Textarea } from '../components/common/form-controls/Textarea'


export default {
    title: "Example/Textarea",
    component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />;

export const Primary = Template.bind({});
Primary.args = {
        label: "Due Date"
};