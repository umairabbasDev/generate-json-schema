type JsonSchemaType = 'string' | 'number' | 'integer' | 'boolean' | 'object' | 'array' | 'null';

interface JsonObjectSchema {
    type: 'object';
    properties: { [key: string]: JsonSchema };
    required: string[];
}

interface JsonArraySchema {
    type: 'array';
    items: JsonSchema;
}

type JsonSchema = JsonArraySchema | JsonObjectSchema | { type: JsonSchemaType };

export function generateJsonSchema(data: any): JsonSchema {
    let dataType: JsonSchemaType;

    if (typeof data === 'string') {
        dataType = 'string';
    } else if (typeof data === 'number') {
        dataType = 'number';
    } else if (typeof data === 'boolean') {
        dataType = 'boolean';
    } else if (typeof data === 'object' && data === null) {
        dataType = 'null';
    } else if (Array.isArray(data)) {
        const items = generateJsonSchema(data[0]);
        return { type: 'array', items };
    } else if (typeof data === 'object') {
        const properties: { [key: string]: JsonSchema } = {};
        // const required: string[] = [];

        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                properties[key] = generateJsonSchema(data[key]);
                // required.push(key);
            }
        }

        // return { type: 'object', properties, required };
        return { type: 'object', properties };
    } else {
        throw new Error('Unsupported data type for JSON schema generation');
    }

    return { type: dataType };
}
