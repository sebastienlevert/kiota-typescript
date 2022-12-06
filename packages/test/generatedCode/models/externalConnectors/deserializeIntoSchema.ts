import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {deserializeIntoProperty} from './deserializeIntoProperty';
import {Schema} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSchema(schema: Schema | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(schema),
        "baseType": n => { schema.baseType = n.getStringValue() as any ; },
        "properties": n => { schema.properties = n.getCollectionOfObjectValuesFromMethod(deserializeIntoProperty) as any ; },
    }
}
