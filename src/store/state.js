export const STORAGE_KEY = 'vuegems'

let initialState = {}

if (localStorage.getItem(STORAGE_KEY)) {
  initialState = JSON.parse(localStorage.getItem(STORAGE_KEY))
} else {
  initialState = {
    auth: {
      isLoggedIn: false,
      accessToken: null,
      refreshToken: null
    },
    user: {
      name: null
    }
  }
}

initialState.appnav = {
  searchText: '',
  searchTimestamp: null
}

export const state = initialState
