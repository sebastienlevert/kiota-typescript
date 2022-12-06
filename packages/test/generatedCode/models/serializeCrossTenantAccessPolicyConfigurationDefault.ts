import {CrossTenantAccessPolicyConfigurationDefault} from './index';
import {serializeCrossTenantAccessPolicyB2BSetting} from './serializeCrossTenantAccessPolicyB2BSetting';
import {serializeCrossTenantAccessPolicyInboundTrust} from './serializeCrossTenantAccessPolicyInboundTrust';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCrossTenantAccessPolicyConfigurationDefault(writer: SerializationWriter, crossTenantAccessPolicyConfigurationDefault: CrossTenantAccessPolicyConfigurationDefault | undefined = {}) : void {
        serializeEntity(writer, crossTenantAccessPolicyConfigurationDefault)
            writer.writeObjectValueFromMethod("b2bCollaborationInbound", crossTenantAccessPolicyConfigurationDefault.b2bCollaborationInbound as any, serializeCrossTenantAccessPolicyB2BSetting);
            writer.writeObjectValueFromMethod("b2bCollaborationOutbound", crossTenantAccessPolicyConfigurationDefault.b2bCollaborationOutbound as any, serializeCrossTenantAccessPolicyB2BSetting);
            writer.writeObjectValueFromMethod("b2bDirectConnectInbound", crossTenantAccessPolicyConfigurationDefault.b2bDirectConnectInbound as any, serializeCrossTenantAccessPolicyB2BSetting);
            writer.writeObjectValueFromMethod("b2bDirectConnectOutbound", crossTenantAccessPolicyConfigurationDefault.b2bDirectConnectOutbound as any, serializeCrossTenantAccessPolicyB2BSetting);
            writer.writeObjectValueFromMethod("inboundTrust", crossTenantAccessPolicyConfigurationDefault.inboundTrust as any, serializeCrossTenantAccessPolicyInboundTrust);
            writer.writeBooleanValue("isServiceDefault", crossTenantAccessPolicyConfigurationDefault.isServiceDefault);
}
