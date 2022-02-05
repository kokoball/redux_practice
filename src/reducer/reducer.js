const initialState = {
  // productionInformation: {
  categories: [],
  tags: [],
  productionName: '',
  productionDescribe: '',
  productionCode: Date.now(),
  thumbnail: [],
  mainImages: [],
}

export default function reducer(state = initialState, action) {
  if (action.type === 'setProductions') {
    const { productions } = action.payload
    return {
      ...state,
      productions,
    }
  }
  if (action.type === 'changeProudctionInformation') {
    const { name, value } = action.payload
    return {
      ...state,
      productionInformation: { ...state, [name]: value },
    }
  }
  if (action.type === 'changeProudctionImage') {
    const { imageType, images } = action.payload
    return {
      ...state,
      productionInformation: {
        ...state,
        [imageType]: images,
      },
    }
  }
  // switch (type) {
  //   case CHANGE_PRODUCTION_IMAGES: {

  //   }
  //   case CHANGE_RECOMMEND_IMAGES: {
  //     return {
  //       ...state,
  //       recommendImages: { ...state.recommendImages, ...payload },
  //     }
  //   }
  //   case CHANGE_PRODUCTION_BENEFIT: {
  //     return { ...state, productionBenefit: payload }
  //   }
  //   case CHANGE_OTHER_SETTING: {
  //     return { ...state, otherSetting: payload }
  //   }
  //   case CHANGE_PERIOD: {
  //     return { ...state, period: { ...state.period, ...payload } }
  //   }
  //   case CHANGE_DELIVERY_SETTING: {
  //     return {
  //       ...state,
  //       deliverySetting: { ...state.deliverySetting, ...payload },
  //     }
  //   }
  //   default: {
  //     throw new Error('type is inValid')
  //   }
  // }
  return state
}
