import {deserializeIntoCrossTenantAccessPolicyConfigurationDefault} from './deserializeIntoCrossTenantAccessPolicyConfigurationDefault';
import {deserializeIntoCrossTenantAccessPolicyConfigurationPartner} from './deserializeIntoCrossTenantAccessPolicyConfigurationPartner';
import {deserializeIntoPolicyBase} from './deserializeIntoPolicyBase';
import {CrossTenantAccessPolicy} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCrossTenantAccessPolicy(crossTenantAccessPolicy: CrossTenantAccessPolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPolicyBase(crossTenantAccessPolicy),
        "allowedCloudEndpoints": n => { crossTenantAccessPolicy.allowedCloudEndpoints = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "default": n => { crossTenantAccessPolicy.default_escaped = n.getObject(deserializeIntoCrossTenantAccessPolicyConfigurationDefault) as any ; },
        "partners": n => { crossTenantAccessPolicy.partners = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCrossTenantAccessPolicyConfigurationPartner) as any ; },
    }
}
