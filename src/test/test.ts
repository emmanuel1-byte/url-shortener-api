import app from '../app'
import supertest from 'supertest'

describe('GET /', () => {
    it('should respond with json', async () => {
        supertest(app)
            .get('/')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})


describe('POST /', () => {
    it('should respond with the shorten url', async () => {
        supertest(app)
            .post('/')
            .send({ long_url: 'https://hevodata.com/learn/mongodb-atlas-nodejs/' })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })

    describe('GET /', () => {
        it('should redirect to the original url', async () => {
            supertest(app)
                .get('/:code')
                .expect('Content-Type', /json/)
                .expect(200)
        })
    })

})