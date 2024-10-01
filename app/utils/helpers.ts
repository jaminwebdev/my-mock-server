export const flattenMapToArray = (map: Map<string, any>) => {
  return [...map.entries()].map(([_, value]) => value);
};
