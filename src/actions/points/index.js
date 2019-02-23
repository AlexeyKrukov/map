export const addPoint = (text) => ({
    type: 'ADD_POINT',
    payload: {
        text: text
    }
});

export const deletePoint = (id) => ({
    type: 'DELETE_POINT',
    payload: {
        id: id
    }
});
