import {deserializeIntoCrossTenantAccessPolicyTargetConfiguration} from './deserializeIntoCrossTenantAccessPolicyTargetConfiguration';
import {CrossTenantAccessPolicyB2BSetting} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCrossTenantAccessPolicyB2BSetting(crossTenantAccessPolicyB2BSetting: CrossTenantAccessPolicyB2BSetting | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "applications": n => { crossTenantAccessPolicyB2BSetting.applications = n.getObject(deserializeIntoCrossTenantAccessPolicyTargetConfiguration) as any ; },
        "@odata.type": n => { crossTenantAccessPolicyB2BSetting.odataType = n.getStringValue() as any ; },
        "usersAndGroups": n => { crossTenantAccessPolicyB2BSetting.usersAndGroups = n.getObject(deserializeIntoCrossTenantAccessPolicyTargetConfiguration) as any ; },
    }
}
