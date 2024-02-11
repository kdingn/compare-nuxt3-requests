export default defineEventHandler(async (event): Promise<any> => {
  const body = await readBody(event);
  return await $fetch(body.url);
});
