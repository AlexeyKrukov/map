const initialState = {
    centerCoordinates: [55.751574, 17.573856]
};

export default (state = initialState, action) => {

    switch (action.type) {
        case 'UPDATE_CENTER':
            return {
                centerCoordinates: action.payload.centerCoordinates
            };
        default:  return {
            ...state
        };
    }
};
