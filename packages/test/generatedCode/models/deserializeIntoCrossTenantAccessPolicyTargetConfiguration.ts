import {CrossTenantAccessPolicyTargetConfigurationAccessType} from './crossTenantAccessPolicyTargetConfigurationAccessType';
import {deserializeIntoCrossTenantAccessPolicyTarget} from './deserializeIntoCrossTenantAccessPolicyTarget';
import {CrossTenantAccessPolicyTargetConfiguration} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCrossTenantAccessPolicyTargetConfiguration(crossTenantAccessPolicyTargetConfiguration: CrossTenantAccessPolicyTargetConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "accessType": n => { crossTenantAccessPolicyTargetConfiguration.accessType = n.getEnumValue<CrossTenantAccessPolicyTargetConfigurationAccessType>(CrossTenantAccessPolicyTargetConfigurationAccessType) as any ; },
        "@odata.type": n => { crossTenantAccessPolicyTargetConfiguration.odataType = n.getStringValue() as any ; },
        "targets": n => { crossTenantAccessPolicyTargetConfiguration.targets = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCrossTenantAccessPolicyTarget) as any ; },
    }
}
