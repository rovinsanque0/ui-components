import Label from './Label';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    disabled: { control: 'boolean' }
  },
  args: {
    text: 'Username',
    disabled: false
  }
};

export const Default = {};
export const Disabled = { args: { disabled: true, text: 'Disabled Label' } };
