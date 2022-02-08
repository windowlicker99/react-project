import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Search } from '../components/common/form-controls/Search'


export default {
    title: "Example/Serch",
    component: Search
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Default = Template.bind({});
    Default.args = {
        formLabel: "Due Date"
};