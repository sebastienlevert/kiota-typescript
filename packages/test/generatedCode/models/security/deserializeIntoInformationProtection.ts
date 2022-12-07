import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {deserializeIntoInformationProtectionPolicySetting} from './deserializeIntoInformationProtectionPolicySetting';
import {deserializeIntoSensitivityLabel} from './deserializeIntoSensitivityLabel';
import {InformationProtection} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInformationProtection(informationProtection: InformationProtection | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(informationProtection),
        "labelPolicySettings": n => { informationProtection.labelPolicySettings = n.getObject(deserializeIntoInformationProtectionPolicySetting) as any ; },
        "sensitivityLabels": n => { informationProtection.sensitivityLabels = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSensitivityLabel) as any ; },
    }
}
