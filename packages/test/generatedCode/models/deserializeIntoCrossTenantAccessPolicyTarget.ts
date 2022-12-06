import {CrossTenantAccessPolicyTargetType} from './crossTenantAccessPolicyTargetType';
import {CrossTenantAccessPolicyTarget} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCrossTenantAccessPolicyTarget(crossTenantAccessPolicyTarget: CrossTenantAccessPolicyTarget | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { crossTenantAccessPolicyTarget.odataType = n.getStringValue() as any ; },
        "target": n => { crossTenantAccessPolicyTarget.target = n.getStringValue() as any ; },
        "targetType": n => { crossTenantAccessPolicyTarget.targetType = n.getEnumValue<CrossTenantAccessPolicyTargetType>(CrossTenantAccessPolicyTargetType) as any ; },
    }
}
