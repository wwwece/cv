export const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[äå]/g, 'a')
    .replace(/[ö]/g, 'o')
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
