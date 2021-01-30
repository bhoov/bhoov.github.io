module.exports = {
  template: "Index.svelte",
  all: () => [{slug: "/happy-birthday-karissa"}],
  permalink: ({ request }) => request.slug,
  data: ({ request, data }) => {
    return {};
  },
};
