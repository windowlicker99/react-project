import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Btn } from '../components/common/form-controls/Btn'


export default {
    title: "Example/Button",
    component: Btn,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Btn>;

const Template: ComponentStory<typeof Btn> = (args) => <Btn {...args} />;

export const Primary = Template.bind({});
    Primary.args = {
    btnStatus: 'btn-lg-primary',
    btnText: 'Button'
};

export const Secondary = Template.bind({});
    Secondary.args = {
    btnStatus: 'btn-lg-secondary',
    btnText: 'Button'
};

export const Outline = Template.bind({});
    Outline.args = {
    btnStatus: 'btn-lg-outline',
    btnText: 'Button'
};

export const PrimaryIcon = Template.bind({});
    PrimaryIcon.args = {
    btnStatus: 'btn-xs-primary',
    btnIcon: 'icon-architecture'
};

export const SecondaryIcon = Template.bind({});
    SecondaryIcon.args = {
    btnStatus: 'btn-xs-secondary',
    btnIcon: 'icon-architecture'
};

export const Danger = Template.bind({});
    Danger.args = {
    btnStatus: 'btn-xs-danger',
    btnIcon: 'icon-delete'
};