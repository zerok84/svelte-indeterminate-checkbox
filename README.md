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
import Checkbox from 'svelte-indeterminate-checkbox';

let checkboxStatus = 'x';

function handleClick(e) {
    switch (checkboxStatus) {
        case 'v':
            checkboxStatus = '-';
        break;
        case '-':
            checkboxStatus = 'x';
            break;
        case 'x':
            checkboxStatus = 'v';
    }
}
</script>

<Checkbox id="myCheckbox" name="myCheckbox" status={checkboxStatus} on:click={handleClick} />
```

### Props

| Name | Value |
| ---- | ----- |
| `id` | The checkbox \<input\> id |
| `name` | The checkbox input name |
| `status` | String, '-' means indeterminate, 'x' means unchecked, 'y' means checked |

### Events

| Event | Note |
| ---- | ----- |
| `click` |  Click Event |


Note: Should not call `e.preventDefault()` inside the click handler because it will prevent the checkbox to change its value, this relates to the browser implementation and HTML Spec, (learn more)[https://stackoverflow.com/questions/30426523/why-does-preventdefault-on-checkbox-click-event-returns-true-for-the-checked-att]