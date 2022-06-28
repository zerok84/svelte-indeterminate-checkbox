import { action } from '@storybook/addon-actions';
import Checkbox from '../src/index';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

export const Default = () => ({
  Component: Checkbox,
  props: { name: 'Checkbox' },
  on: { click: action('clicked') },
});

export const Checked = () => ({
  Component: Checkbox,
  props: { name: 'Checkbox', status: 'v' },
  on: { click: action('clicked') },
});

export const Indeterminate = () => ({
  Component: Checkbox,
  props: { name: 'Checkbox', status: '-' },
  on: { click: action('clicked') },
});
