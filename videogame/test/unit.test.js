const request = require('supertest');
const app = require('../app');
const videoGame = require('../models/games');

jest.mock('../models/games', () => ({
    find: jest.fn()
}));

describe('GET /videogames', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('fetch the video games and render the index view', async () => {
        videoGame.find.mockResolvedValue([
            { _id: '1', title: 'Game 1', image: 'image1.jpg', price: '30', description: 'Description 1' },
            { _id: '2', title: 'Game 2', image: 'image2.jpg', price: '40', description: 'Description 2' },
        ]);

        const response = await request(app).get('/videogames');

        expect(response.statusCode).toBe(200);
        expect(response.headers['content-type']).toEqual(expect.stringContaining('html'));
        expect(response.text).toContain('Game 1');
        expect(response.text).toContain('Game 2');
        expect(videoGame.find).toHaveBeenCalledTimes(1);
    });

    test(' handle errors when there is a database failure', async () => {
        // Mock implementation to simulate a database error
        videoGame.find.mockRejectedValue(new Error('Database failure'));

        const response = await request(app).get('/videogames');

        expect(response.statusCode).toBe(500);
        expect(response.headers['content-type']).toEqual(expect.stringContaining('html'));
        expect(response.text).toContain('Error');
        expect(videoGame.find).toHaveBeenCalledTimes(1);
    });



});
