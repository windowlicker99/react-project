import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PageTabs } from '../components/common/PageTabs'


export default {
    title: "Example/PageTabs",
    component: PageTabs,
} as ComponentMeta<typeof PageTabs>;

const Template: ComponentStory<typeof PageTabs> = (args) => <PageTabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    active: 'active',
};