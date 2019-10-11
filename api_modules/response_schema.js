const resources_schema = {
    'type': 'object',
    'properties': {
        'name': {'type': 'string'},
        'version': {'type': 'string'},
        'href': {'type': 'string'}
    },
    'required': ['name', 'version', 'href']
};

const decklids_status_schema = {
    'type': 'object',
    'properties': {
        'decklidstatus': {
            'type': 'object',
            'properties': {
                'value': {'type': 'string'},
                'timestamp': {'type': 'long'},
            },
            'required': ['value', 'timestamp']        
        },
    },
    'required': ['decklidstatus']
};

const error_schema = {
    'type': 'object',
    'properties': {
        'exveErrorId': {'type': 'string'},
        'exveErrorMsg': {'type': 'string'},
        'exveErrorRef': {'type': 'string'}
    },
    'required': ['exveErrorId', 'exveErrorMsg', 'exveErrorRef']
}

//schemas for required response json body.
export {
    resources_schema,
    decklids_status_schema,
    error_schema
}