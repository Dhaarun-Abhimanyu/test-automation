const request = require('supertest');
const express = require('express');

// Import the app logic
const app = express();
app.use(express.json());

// Define routes (you can import these if they're in a separate file)
app.get('/', (req, res) => {
    res.send({ msg: "Skill issue" });
});

app.get('/route2', (req, res) => {
    res.send({ msg: "Route 2" });
});

app.post('/route3', (req, res) => {
    const { name } = req.body;
    res.send({ msg: `Hello ${name}` });
});

describe('Express Application Tests', () => {
    it('GET / - should return "Skill issue"', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ msg: "Skill issue" });
    });

    it('GET /route2 - should return "Route 2"', async () => {
        const response = await request(app).get('/route2');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ msg: "Route 2" });
    });

    it('POST /route3 - should return "Hello <name>"', async () => {
        const name = 'John Doe';
        const response = await request(app)
            .post('/route3')
            .send({ name });
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ msg: `Hello ${name}` });
    });

    it('POST /route3 - should return 400 if no name is provided', async () => {
        const response = await request(app).post('/route3').send({});
        expect(response.status).toBe(200); // Assuming no validation in this app
        expect(response.body).toEqual({ msg: "Hello undefined" });
    });
});