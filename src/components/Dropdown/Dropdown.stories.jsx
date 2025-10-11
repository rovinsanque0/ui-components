import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    ariaLabel: { control: 'text' },
    disabled: { control: 'boolean' },
    options: { control: 'object' },
    value: { control: 'text' }
  },
  args: {
    ariaLabel: 'Fruits',
    disabled: false,
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'cherry', label: 'Cherry' }
    ],
    value: 'apple'
  }
};

export const Default = {};
export const Disabled = { args: { disabled: true } };
