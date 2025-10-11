import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' }
  },
  args: {
    label: 'Click Me',
    disabled: false
  }
};

export const Default = {};
export const Disabled = { args: { disabled: true, label: 'Disabled' } };
