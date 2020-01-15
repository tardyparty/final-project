export default (state = {}, action) => {
  switch (action.type) {
    case 'COMMUNITY_LOADED':
      return {
        ...state,
        posts: action.payload.posts
      };
  }

  return state;
};