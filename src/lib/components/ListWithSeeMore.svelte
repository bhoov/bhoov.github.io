<script>
    let expanded = false;
    export let items = [];
    const maxVisibleItems = 6; // Change this number to set how many items you want to show before expanding

    function toggleExpand() {
        expanded = !expanded;
    }
</script>

<style>
  .scrollable {
    overflow-y: auto;
  }
</style>

<div class="border rounded-md shadow-md p-4">
    <div class={`max-h-40 ${expanded ? 'h-auto' : 'overflow-hidden'} ${!expanded && items.length > maxVisibleItems ? 'scrollable' : ''}`}>
        <ul class="space-y-2">
            {#each items as item, index}
                {#if expanded || index < maxVisibleItems}
                    <li class="p-2 bg-gray-100 rounded-md">{item}</li>
                {/if}
            {/each}
        </ul>
    </div>
    {#if items.length > maxVisibleItems}
        <button class="mt-4 text-blue-500 hover:text-blue-700" on:click={toggleExpand}>
            {expanded ? 'Show Less' : 'See More'}
        </button>
    {/if}
</div>