const validate = require('jsonschema').validate;

/**
 * to validate the response json schema
 * @param {*} schema the schema of the json body
 * @param {*} response the actual response body
 * 
 * returns, true if its same, otherwise false 
 */
export const validateResponseSchema = (schema, response) => {
    let result = [];
    response.forEach((r) => {
        result.push(validate(r, schema).errors.length);
    }); 
    return ! result.some(e => e >= 1); 
};