import {deserializeIntoEntity} from './deserializeIntoEntity';
import {SensitivityPolicySettings} from './index';
import {SensitivityLabelTarget} from './sensitivityLabelTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSensitivityPolicySettings(sensitivityPolicySettings: SensitivityPolicySettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(sensitivityPolicySettings),
        "applicableTo": n => { sensitivityPolicySettings.applicableTo = n.getEnumValue<SensitivityLabelTarget>(SensitivityLabelTarget) as any ; },
        "downgradeSensitivityRequiresJustification": n => { sensitivityPolicySettings.downgradeSensitivityRequiresJustification = n.getBooleanValue() as any ; },
        "helpWebUrl": n => { sensitivityPolicySettings.helpWebUrl = n.getStringValue() as any ; },
        "isMandatory": n => { sensitivityPolicySettings.isMandatory = n.getBooleanValue() as any ; },
    }
}
