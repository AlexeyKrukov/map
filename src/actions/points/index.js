export const addPoint = (text, coordinates) => ({
    type: 'ADD_POINT',
    payload: {
        text,
        coordinates
    }
});

export const deletePoint = (id) => ({
    type: 'DELETE_POINT',
    payload: {
        id
    }
});

export const updateCoordinates = (coordinates, id) => ({
    type: 'UPDATE_COORDINATES',
    payload: {
        coordinates,
        id
    }
});

export const updatePoints = (points) => ({
    type: 'UPDATE_POINTS',
    payload: {
        points
    }
});
