import {CrossTenantAccessPolicyB2BSetting} from './index';
import {serializeCrossTenantAccessPolicyTargetConfiguration} from './serializeCrossTenantAccessPolicyTargetConfiguration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCrossTenantAccessPolicyB2BSetting(writer: SerializationWriter, crossTenantAccessPolicyB2BSetting: CrossTenantAccessPolicyB2BSetting | undefined = {}) : void {
            writer.writeObjectValueFromMethod("applications", crossTenantAccessPolicyB2BSetting.applications as any, serializeCrossTenantAccessPolicyTargetConfiguration);
            writer.writeStringValue("@odata.type", crossTenantAccessPolicyB2BSetting.odataType);
            writer.writeObjectValueFromMethod("usersAndGroups", crossTenantAccessPolicyB2BSetting.usersAndGroups as any, serializeCrossTenantAccessPolicyTargetConfiguration);
}
