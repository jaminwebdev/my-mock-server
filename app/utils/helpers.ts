export const flattenMapToArray = (map: Map<string, any>) => {
  return [...map.entries()].map(([_, value]) => value);
};

export const flattenMapToArrayAndSortByDate = (map: Map<string, any>) => {
  return flattenMapToArray(map).sort((a, b) => a.dateAdded.getTime() - b.dateAdded.getTime());
};

