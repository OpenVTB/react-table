import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Table, Props } from '../src/Table';
import * as data from '../src/Table/data';

const meta: Meta = {
  title: 'Table',
  component: Table,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = args => <Table {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Header = Template.bind({});

Header.args = {
  ...data,
  style: {
    maxHeight: '400px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  },
};
