export default (state = {}, action) => {
    switch (action.type) {
        case "CREATE_POST":
            return {
                ...state,
                inProgress: false,
                errors: action.error ? action.payload.errors : null
            };
        case 'ASYNC_START':
            if (action.subtype === 'POST_POST') {
                return { ...state, inProgress: true };
            }
            break;
        case 'UPDATE_FIELD_POST':
            return { 
                ...state, 
                [action.key]: action.value 
            };
    }

    return state;
}