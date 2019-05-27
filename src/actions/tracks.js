const mockApiData = [
    {
        id:1,
        name:'Ballbreaker'
    },
    {
        id:2,
        name:'Overkill'
    },
    {
        id:3,
        name:'God save the queen'
    },
    {
        id:4,
        name:'Enter sandman'
    },
    {
        id:5,
        name:'Into glory ride'
    }
];


export const getTracks = () => dispatch => {
        setTimeout(() => {
            console.log('Ive got tracks');
            dispatch({type: 'FETCH_TRACKS_SUCCESS', payload: mockApiData})
        }, 2000)
};
