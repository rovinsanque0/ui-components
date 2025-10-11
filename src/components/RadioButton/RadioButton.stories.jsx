import RadioButton from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
};

export const Default = () => (
  <>
    <RadioButton label="Choice A" name="demo" value="a" checked />
    <RadioButton label="Choice B" name="demo" value="b" />
  </>
);

export const Disabled = () => (
  <>
    <RadioButton label="Choice A" name="disabledDemo" value="a" disabled />
    <RadioButton label="Choice B" name="disabledDemo" value="b" disabled />
  </>
);
