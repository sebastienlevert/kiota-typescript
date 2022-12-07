import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoInformationProtectionLabel} from './deserializeIntoInformationProtectionLabel';
import {InformationProtectionPolicy} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInformationProtectionPolicy(informationProtectionPolicy: InformationProtectionPolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(informationProtectionPolicy),
        "labels": n => { informationProtectionPolicy.labels = n.getCollectionOfObjectValuesFromMethod(deserializeIntoInformationProtectionLabel) as any ; },
    }
}
