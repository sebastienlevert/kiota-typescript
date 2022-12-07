import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DataLossPreventionPolicy} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDataLossPreventionPolicy(dataLossPreventionPolicy: DataLossPreventionPolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(dataLossPreventionPolicy),
        "name": n => { dataLossPreventionPolicy.name = n.getStringValue() as any ; },
    }
}
