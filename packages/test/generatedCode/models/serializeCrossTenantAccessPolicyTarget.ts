import {CrossTenantAccessPolicyTargetType} from './crossTenantAccessPolicyTargetType';
import {CrossTenantAccessPolicyTarget} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCrossTenantAccessPolicyTarget(writer: SerializationWriter, crossTenantAccessPolicyTarget: CrossTenantAccessPolicyTarget | undefined = {}) : void {
            writer.writeStringValue("@odata.type", crossTenantAccessPolicyTarget.odataType);
            writer.writeStringValue("target", crossTenantAccessPolicyTarget.target);
            writer.writeEnumValue<CrossTenantAccessPolicyTargetType>("targetType", crossTenantAccessPolicyTarget.targetType);
}
