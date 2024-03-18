const request = require('supertest');
const app = require('../app');
const videoGame = require('../models/games');

describe('Integration Test for GET /videogames/:id', () => {

    let testGame;
    beforeAll(async () => {
        testGame = new videoGame({
            title: 'Test Game',
            image: 'test-image.jpg',
            price: '20',
            description: 'Test Description'
        });
        await testGame.save();
    });


    afterAll(async () => {
        await videoGame.deleteOne({ _id: testGame._id });
    });

    test('it should retrieve the video game by id and render the show view', async () => {
        const response = await request(app)
            .get(`/videogames/${testGame._id}`)
            .expect(200);


        expect(response.headers['content-type']).toEqual(expect.stringContaining('html'));


        expect(response.text).toContain('Test Game');
    });

    test('handle the error when the video game does not exist', async () => {
        const response = await request(app)
            .get('/videogames/invalid-id')
            .expect(404);


        expect(response.headers['content-type']).toEqual(expect.stringContaining('html'));


        expect(response.text).toContain('Not Found');
    });
});
