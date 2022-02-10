export const fetchCategories = async () => {
  const response = await fetch('/categories.json')
  const categories = await response.json()

  return categories.categories
}

export const fetchTags = async () => {
  const response = await fetch('/tags.json')
  const tags = await response.json()

  return tags
}
