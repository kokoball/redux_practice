export function changeProudctionInformation({ name, value }) {
  return {
    // const { name, value } = e.target;
    type: 'changeProudctionInformation',
    payload: {
      name,
      value,
    },
  }
}

export function changeProudctionImage({ imageType, images }) {
  return {
    type: 'changeProudctionImage',
    payload: { imageType, images },
  }
}

export function changeRestaurantField({ name, value }) {
  return {
    type: 'changeRestaurantField',
    payload: {
      name,
      value,
    },
  }
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  }
}
export function loadRestaurants() {
  return async (dispatch) => {
    // TODO: fetch...
    const restaurants = []
    // TODO: load restaurants from API server.
    // 1. API server 확보
    // 2. fetch
    dispatch(setRestaurants(restaurants))
  }
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: {
      categories,
    },
  }
}
export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories()
    dispatch(setRestaurants(categories))
  }
}
