export function categoriesFormattedForDropdown(categories) {
  return categories.map(category => {
    return {
      value: category.pageid,
      text: category.title.replace('Category:', '')
    };
  });
}
