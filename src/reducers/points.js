const initialState = {
    points: [],
    lastId: 0
};

export default (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_POINT':
            let points = [];
            Object.assign(points, state.points);
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
        case 'UPDATE_COORDINATES':
            points = [];
            Object.assign(points, state.points);
            for (let i = 0; i < state.points.length; i++) {
                if (state.points[i].id === action.payload.id) {
                    points[i].coordinates = action.payload.coordinates;
                }
            }
            return {
                points: points,
                lastId: action.payload.id
            };
        case 'UPDATE_POINTS':
            points = [];
            Object.assign(points, action.payload.points);
            return {
                points: points,
                lastId: state.lastId
            };
        default:  return {
            ...state
        };
    }
};
