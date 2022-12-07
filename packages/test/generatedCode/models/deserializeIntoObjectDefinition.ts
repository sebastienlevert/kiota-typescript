import {deserializeIntoAttributeDefinition} from './deserializeIntoAttributeDefinition';
import {deserializeIntoMetadataEntry} from './deserializeIntoMetadataEntry';
import {ObjectDefinition} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoObjectDefinition(objectDefinition: ObjectDefinition | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "attributes": n => { objectDefinition.attributes = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAttributeDefinition) as any ; },
        "metadata": n => { objectDefinition.metadata = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMetadataEntry) as any ; },
        "name": n => { objectDefinition.name = n.getStringValue() as any ; },
        "supportedApis": n => { objectDefinition.supportedApis = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
