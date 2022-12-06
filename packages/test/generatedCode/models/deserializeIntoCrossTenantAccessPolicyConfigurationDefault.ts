import {deserializeIntoCrossTenantAccessPolicyB2BSetting} from './deserializeIntoCrossTenantAccessPolicyB2BSetting';
import {deserializeIntoCrossTenantAccessPolicyInboundTrust} from './deserializeIntoCrossTenantAccessPolicyInboundTrust';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {CrossTenantAccessPolicyConfigurationDefault} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCrossTenantAccessPolicyConfigurationDefault(crossTenantAccessPolicyConfigurationDefault: CrossTenantAccessPolicyConfigurationDefault | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(crossTenantAccessPolicyConfigurationDefault),
        "b2bCollaborationInbound": n => { crossTenantAccessPolicyConfigurationDefault.b2bCollaborationInbound = n.getObject(deserializeIntoCrossTenantAccessPolicyB2BSetting) as any ; },
        "b2bCollaborationOutbound": n => { crossTenantAccessPolicyConfigurationDefault.b2bCollaborationOutbound = n.getObject(deserializeIntoCrossTenantAccessPolicyB2BSetting) as any ; },
        "b2bDirectConnectInbound": n => { crossTenantAccessPolicyConfigurationDefault.b2bDirectConnectInbound = n.getObject(deserializeIntoCrossTenantAccessPolicyB2BSetting) as any ; },
        "b2bDirectConnectOutbound": n => { crossTenantAccessPolicyConfigurationDefault.b2bDirectConnectOutbound = n.getObject(deserializeIntoCrossTenantAccessPolicyB2BSetting) as any ; },
        "inboundTrust": n => { crossTenantAccessPolicyConfigurationDefault.inboundTrust = n.getObject(deserializeIntoCrossTenantAccessPolicyInboundTrust) as any ; },
        "isServiceDefault": n => { crossTenantAccessPolicyConfigurationDefault.isServiceDefault = n.getBooleanValue() as any ; },
    }
}
