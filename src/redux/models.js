export const count = {
  state: {
    count: 0
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    increment(state, payload) {
      return {
        ...state,
        count: state.count + payload
      }
    }
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async incrementAsync(payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      dispatch.count.increment(payload)
    }
  })
}

export const cart = {
  state: 0,
}
