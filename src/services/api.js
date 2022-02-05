const fetchCategories = async () => {
  const response = await fetch('/categories.json')
  const categories = await response.json()

  return categories.categories
}

export default fetchCategories
