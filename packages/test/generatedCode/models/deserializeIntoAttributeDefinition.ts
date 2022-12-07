import {AttributeType} from './attributeType';
import {deserializeIntoMetadataEntry} from './deserializeIntoMetadataEntry';
import {deserializeIntoReferencedObject} from './deserializeIntoReferencedObject';
import {deserializeIntoStringKeyStringValuePair} from './deserializeIntoStringKeyStringValuePair';
import {AttributeDefinition} from './index';
import {Mutability} from './mutability';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttributeDefinition(attributeDefinition: AttributeDefinition | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "anchor": n => { attributeDefinition.anchor = n.getBooleanValue() as any ; },
        "apiExpressions": n => { attributeDefinition.apiExpressions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoStringKeyStringValuePair) as any ; },
        "caseExact": n => { attributeDefinition.caseExact = n.getBooleanValue() as any ; },
        "defaultValue": n => { attributeDefinition.defaultValue = n.getStringValue() as any ; },
        "flowNullValues": n => { attributeDefinition.flowNullValues = n.getBooleanValue() as any ; },
        "metadata": n => { attributeDefinition.metadata = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMetadataEntry) as any ; },
        "multivalued": n => { attributeDefinition.multivalued = n.getBooleanValue() as any ; },
        "mutability": n => { attributeDefinition.mutability = n.getEnumValue<Mutability>(Mutability) as any ; },
        "name": n => { attributeDefinition.name = n.getStringValue() as any ; },
        "referencedObjects": n => { attributeDefinition.referencedObjects = n.getCollectionOfObjectValuesFromMethod(deserializeIntoReferencedObject) as any ; },
        "required": n => { attributeDefinition.required = n.getBooleanValue() as any ; },
        "type": n => { attributeDefinition.type = n.getEnumValue<AttributeType>(AttributeType) as any ; },
    }
}
