import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {InformationProtectionPolicySetting} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInformationProtectionPolicySetting(informationProtectionPolicySetting: InformationProtectionPolicySetting | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(informationProtectionPolicySetting),
        "defaultLabelId": n => { informationProtectionPolicySetting.defaultLabelId = n.getStringValue() as any ; },
        "isDowngradeJustificationRequired": n => { informationProtectionPolicySetting.isDowngradeJustificationRequired = n.getBooleanValue() as any ; },
        "isMandatory": n => { informationProtectionPolicySetting.isMandatory = n.getBooleanValue() as any ; },
        "moreInfoUrl": n => { informationProtectionPolicySetting.moreInfoUrl = n.getStringValue() as any ; },
    }
}
