import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoExtensionSchemaProperty} from './deserializeIntoExtensionSchemaProperty';
import {SchemaExtension} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSchemaExtension(schemaExtension: SchemaExtension | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(schemaExtension),
        "description": n => { schemaExtension.description = n.getStringValue() as any ; },
        "owner": n => { schemaExtension.owner = n.getStringValue() as any ; },
        "properties": n => { schemaExtension.properties = n.getCollectionOfObjectValuesFromMethod(deserializeIntoExtensionSchemaProperty) as any ; },
        "status": n => { schemaExtension.status = n.getStringValue() as any ; },
        "targetTypes": n => { schemaExtension.targetTypes = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
