<script lang="ts">
  export let hrefPrefix = '';
  export let items: {
    url: string;
    title: string;
    author?: string;
  }[];
</script>

<ul class="flex flex-col gap-2">
  {#each items as { url, title, author }}
    <li class="w-full h-full">
      <a
        class="bg-white block p-2 w-full h-full hover:bg-slate-200"
        href="{hrefPrefix ? `${hrefPrefix}/` : ''}{url}"
      >
        <span class="font-bold capitalize">{title}</span>
        {#if author}<span> - {author}</span>{/if}
      </a>
    </li>
  {/each}
</ul>
