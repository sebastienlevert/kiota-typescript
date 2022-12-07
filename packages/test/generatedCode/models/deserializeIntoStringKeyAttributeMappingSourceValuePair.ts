import {deserializeIntoAttributeMappingSource} from './deserializeIntoAttributeMappingSource';
import {StringKeyAttributeMappingSourceValuePair} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoStringKeyAttributeMappingSourceValuePair(stringKeyAttributeMappingSourceValuePair: StringKeyAttributeMappingSourceValuePair | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "key": n => { stringKeyAttributeMappingSourceValuePair.key = n.getStringValue() as any ; },
        "value": n => { stringKeyAttributeMappingSourceValuePair.value = n.getObject(deserializeIntoAttributeMappingSource) as any ; },
    }
}
