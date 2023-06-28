const getData = require('./getData');
const axios = require('axios');

jest.mock('axios');

describe('getData module testing', () => {
    let response;

    beforeEach(() => {
        response = {
            data: [
                {
                    "userId": 1,
                    "id": 1,
                    "title": "delectus aut autem",
                    "completed": false
                },
                {
                    "userId": 1,
                    "id": 2,
                    "title": "quis ut nam facilis et officia qui",
                    "completed": false
                },
                {
                    "userId": 1,
                    "id": 3,
                    "title": "fugiat veniam minus",
                    "completed": false
                },
                {
                    "userId": 1,
                    "id": 4,
                    "title": "et porro tempora",
                    "completed": true
                },
                {
                    "userId": 1,
                    "id": 5,
                    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                    "completed": false
                }
            ]
        };
    });

    test('mock return value', async () => {
        axios.get.mockReturnValue(response);
        const data = await getData();
        expect(axios.get).toBeCalledTimes(1);
        expect(data).toMatchSnapshot();
    });
});