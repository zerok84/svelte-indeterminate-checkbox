# Svelte Indeterminable Checkbox

[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

Simple checkbox component with "indeterminate" status support.

### Installation

You can install this package with `npm` or `yarn`

```bash
npm install svelte-indeterminate-checkbox
```

```bash
yarn add svelte-indeterminate-checkbox
```

### Usage

```svelte
<script>
import IndeterminableCheckbox from 'svelte-indeterminate-checkbox';
</script>
 
<IndeterminableCheckbox status="-" />
```

### Props

| Name | Value |
| ---- | ----- |
| `id` | the checkbox input id |
| `name` | the checkbox input name |
| `status` | String value, set `-` if you want to start with an indeterminable status. <br /> Set to `v` if you want it to start with the checked value. |
| `click` | Returns click event |