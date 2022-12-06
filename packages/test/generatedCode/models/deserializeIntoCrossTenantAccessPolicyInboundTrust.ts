import {CrossTenantAccessPolicyInboundTrust} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCrossTenantAccessPolicyInboundTrust(crossTenantAccessPolicyInboundTrust: CrossTenantAccessPolicyInboundTrust | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "isCompliantDeviceAccepted": n => { crossTenantAccessPolicyInboundTrust.isCompliantDeviceAccepted = n.getBooleanValue() as any ; },
        "isHybridAzureADJoinedDeviceAccepted": n => { crossTenantAccessPolicyInboundTrust.isHybridAzureADJoinedDeviceAccepted = n.getBooleanValue() as any ; },
        "isMfaAccepted": n => { crossTenantAccessPolicyInboundTrust.isMfaAccepted = n.getBooleanValue() as any ; },
        "@odata.type": n => { crossTenantAccessPolicyInboundTrust.odataType = n.getStringValue() as any ; },
    }
}
