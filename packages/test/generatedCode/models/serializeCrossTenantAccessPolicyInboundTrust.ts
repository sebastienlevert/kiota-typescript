import {CrossTenantAccessPolicyInboundTrust} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCrossTenantAccessPolicyInboundTrust(writer: SerializationWriter, crossTenantAccessPolicyInboundTrust: CrossTenantAccessPolicyInboundTrust | undefined = {}) : void {
            writer.writeBooleanValue("isCompliantDeviceAccepted", crossTenantAccessPolicyInboundTrust.isCompliantDeviceAccepted);
            writer.writeBooleanValue("isHybridAzureADJoinedDeviceAccepted", crossTenantAccessPolicyInboundTrust.isHybridAzureADJoinedDeviceAccepted);
            writer.writeBooleanValue("isMfaAccepted", crossTenantAccessPolicyInboundTrust.isMfaAccepted);
            writer.writeStringValue("@odata.type", crossTenantAccessPolicyInboundTrust.odataType);
}
