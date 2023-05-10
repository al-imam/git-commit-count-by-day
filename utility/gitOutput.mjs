export default async () => {
  return (await $`git log --format='%H | %aN | %aE | %as | %s'`).stdout;
};
