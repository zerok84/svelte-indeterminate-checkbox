// NOTE: original code from https://testing-library.com/docs/svelte-testing-library/example
// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/svelte'

import Checkbox from '../src/Checkbox.svelte'

describe('Checkbox', () => {
  it('checkbox should be rendered correctly', () => {
    const { container } = render(Checkbox)
    const checkbox = container.querySelector('input')

    expect(checkbox).toBeDefined()
  });

  it('checkbox should be rendered correctly with checked=true', async () => {
    const { container } = render(Checkbox, { status: 'v' })
    const checkbox = container.querySelector('input')

    expect(checkbox.checked).toEqual(true)
  });

  it('checkbox should be rendered correctly with indeterminate=true', async () => {
    const { container } = render(Checkbox, { status: '-' })
    const checkbox = container.querySelector('input')

    expect(checkbox.indeterminate).toEqual(true)
  });
});