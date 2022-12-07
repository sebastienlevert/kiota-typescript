import {AttributeMappingSourceType} from './attributeMappingSourceType';
import {deserializeIntoStringKeyAttributeMappingSourceValuePair} from './deserializeIntoStringKeyAttributeMappingSourceValuePair';
import {AttributeMappingSource} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttributeMappingSource(attributeMappingSource: AttributeMappingSource | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "expression": n => { attributeMappingSource.expression = n.getStringValue() as any ; },
        "name": n => { attributeMappingSource.name = n.getStringValue() as any ; },
        "parameters": n => { attributeMappingSource.parameters = n.getCollectionOfObjectValuesFromMethod(deserializeIntoStringKeyAttributeMappingSourceValuePair) as any ; },
        "type": n => { attributeMappingSource.type = n.getEnumValue<AttributeMappingSourceType>(AttributeMappingSourceType) as any ; },
    }
}
