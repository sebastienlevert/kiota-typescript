import {deserializeIntoCrossTenantAccessPolicyB2BSetting} from './deserializeIntoCrossTenantAccessPolicyB2BSetting';
import {deserializeIntoCrossTenantAccessPolicyInboundTrust} from './deserializeIntoCrossTenantAccessPolicyInboundTrust';
import {CrossTenantAccessPolicyConfigurationPartner} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCrossTenantAccessPolicyConfigurationPartner(crossTenantAccessPolicyConfigurationPartner: CrossTenantAccessPolicyConfigurationPartner | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "b2bCollaborationInbound": n => { crossTenantAccessPolicyConfigurationPartner.b2bCollaborationInbound = n.getObject(deserializeIntoCrossTenantAccessPolicyB2BSetting) as any ; },
        "b2bCollaborationOutbound": n => { crossTenantAccessPolicyConfigurationPartner.b2bCollaborationOutbound = n.getObject(deserializeIntoCrossTenantAccessPolicyB2BSetting) as any ; },
        "b2bDirectConnectInbound": n => { crossTenantAccessPolicyConfigurationPartner.b2bDirectConnectInbound = n.getObject(deserializeIntoCrossTenantAccessPolicyB2BSetting) as any ; },
        "b2bDirectConnectOutbound": n => { crossTenantAccessPolicyConfigurationPartner.b2bDirectConnectOutbound = n.getObject(deserializeIntoCrossTenantAccessPolicyB2BSetting) as any ; },
        "inboundTrust": n => { crossTenantAccessPolicyConfigurationPartner.inboundTrust = n.getObject(deserializeIntoCrossTenantAccessPolicyInboundTrust) as any ; },
        "isServiceProvider": n => { crossTenantAccessPolicyConfigurationPartner.isServiceProvider = n.getBooleanValue() as any ; },
        "@odata.type": n => { crossTenantAccessPolicyConfigurationPartner.odataType = n.getStringValue() as any ; },
        "tenantId": n => { crossTenantAccessPolicyConfigurationPartner.tenantId = n.getStringValue() as any ; },
    }
}
