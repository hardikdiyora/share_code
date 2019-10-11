import { validateResponseSchema } from '../../../api_modules/schema_validation';
import { vehical_resources } from '../../../api_modules/test_data/resources';
import { resources_schema, decklids_status_schema, error_schema } from '../../../api_modules/response_schema';
import { url, token, vehicleId } from '../../../api_modules/constant';
const assert = require('chai').assert;
const request =  require('supertest');
const server = request.agent(url);

describe('Tests related to vehical status APIs', () => {
    it('should GET /resources with response 200 OK', async () => {
        let route = `/vehicles/${vehicleId}/resources`;
        const response = await server
            .get(route)
            .set('authorization', token)
            .expect('Content-Type', /json/)
            .expect(200);
        assert.equal(response.body.length, 16);
        assert.isTrue(validateResponseSchema(resources_schema, response.body));    
        assert.isTrue(JSON.stringify(response.body) == JSON.stringify(vehical_resources));
    });  

    it('should GET /resources with response 401 Unautorized', async () => {
        let route = `/vehicles/${vehicleId}/resources`;
        const response = await server
            .get(route)
            .expect('Content-Type', /json/)
            .expect(401);
        assert.equal(response.body.exveErrorMsg, 'Unauthorized');
        assert.isTrue(validateResponseSchema(error_schema, [response.body]));    
    });  

    it('should GET /resources/decklidstatus with response 200 OK', async () => {
        let route = `/vehicles/${vehicleId}/resources/decklidstatus`;
        const response = await server
            .get(route)
            .set('authorization', token)
            .expect('Content-Type', /json/)
            .expect(200);
        assert.isTrue(validateResponseSchema(decklids_status_schema, [response.body]));    
    });  

    it('should GET /resources/decklidstatus with response 401 Unautorized', async () => {
        let route = `/vehicles/${vehicleId}/resources/decklidstatus`;
        const response = await server
            .get(route)
            .expect('Content-Type', /json/)
            .expect(401);
        assert.equal(response.body.exveErrorMsg, 'Unauthorized');
        assert.isTrue(validateResponseSchema(error_schema, [response.body]));    
    });  
});