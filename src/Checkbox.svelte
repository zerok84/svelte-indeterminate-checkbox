<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let status = 'x';
  export let id = undefined;
  export let name = undefined;

  let checked = false;
  let checkboxEl;

  $: if (checkboxEl) {
    if (status === 'v') {
      checked = true;
      checkboxEl.indeterminate = false;
    } else if (status === 'x') {
      checked = false;
      checkboxEl.indeterminate = false;
    } else if (status === '-') {
      checkboxEl.indeterminate = true;
    } else {
      console.warn('svelte-checkbox: unsupported status:', status);
    }
  }
  export function handleClick(e) {
    dispatch('click', e);
  }
</script>

<input bind:this={checkboxEl} on:click={handleClick} type="checkbox" {id} {name} bind:checked />
