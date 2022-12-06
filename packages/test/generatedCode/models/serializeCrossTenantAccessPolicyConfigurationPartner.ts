import {CrossTenantAccessPolicyConfigurationPartner} from './index';
import {serializeCrossTenantAccessPolicyB2BSetting} from './serializeCrossTenantAccessPolicyB2BSetting';
import {serializeCrossTenantAccessPolicyInboundTrust} from './serializeCrossTenantAccessPolicyInboundTrust';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCrossTenantAccessPolicyConfigurationPartner(writer: SerializationWriter, crossTenantAccessPolicyConfigurationPartner: CrossTenantAccessPolicyConfigurationPartner | undefined = {}) : void {
            writer.writeObjectValueFromMethod("b2bCollaborationInbound", crossTenantAccessPolicyConfigurationPartner.b2bCollaborationInbound as any, serializeCrossTenantAccessPolicyB2BSetting);
            writer.writeObjectValueFromMethod("b2bCollaborationOutbound", crossTenantAccessPolicyConfigurationPartner.b2bCollaborationOutbound as any, serializeCrossTenantAccessPolicyB2BSetting);
            writer.writeObjectValueFromMethod("b2bDirectConnectInbound", crossTenantAccessPolicyConfigurationPartner.b2bDirectConnectInbound as any, serializeCrossTenantAccessPolicyB2BSetting);
            writer.writeObjectValueFromMethod("b2bDirectConnectOutbound", crossTenantAccessPolicyConfigurationPartner.b2bDirectConnectOutbound as any, serializeCrossTenantAccessPolicyB2BSetting);
            writer.writeObjectValueFromMethod("inboundTrust", crossTenantAccessPolicyConfigurationPartner.inboundTrust as any, serializeCrossTenantAccessPolicyInboundTrust);
            writer.writeBooleanValue("isServiceProvider", crossTenantAccessPolicyConfigurationPartner.isServiceProvider);
            writer.writeStringValue("@odata.type", crossTenantAccessPolicyConfigurationPartner.odataType);
            writer.writeStringValue("tenantId", crossTenantAccessPolicyConfigurationPartner.tenantId);
}
