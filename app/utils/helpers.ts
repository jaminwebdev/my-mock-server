export const flattenMapToArray = (map: Map<string, any>) => {
  return [...map.entries()].map(([_, value]) => value);
};

export const flattenMapToArrayAndSortByDate = (map: Map<string, any>) => {
  return flattenMapToArray(map).sort((a, b) => a.date.getTime() - b.date.getTime());
};

export const flattenMapToArrayAndSortByPrice = (map: Map<string, any>) => {
  return flattenMapToArray(map).sort((a, b) => a.price - b.price);
};