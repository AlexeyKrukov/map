const initialState = {
    points: [],
    lastId: 0
};

export default (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_POINT':
            let points = [];
            Object.assign(points, state.points)
            action.payload.id = ++state.lastId;
            points.push(action.payload);
            return {
                points: points,
                lastId: action.payload.id
            };
        case 'DELETE_POINT':
            points  = [];
            Object.assign(points, state.points);
            const key = points.findIndex((point) => point.id === action.payload.id);
            points.splice(key, 1);
            let maxKey = 0;
            points.forEach((point) => {
                if(point.id > maxKey) {
                    maxKey = point.id;
                }
            });
            return {
                points: points,
                lastId: maxKey
            };
        default:  return {
            ...state
        };
    }
};
