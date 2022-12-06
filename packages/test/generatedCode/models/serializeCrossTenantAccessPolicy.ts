import {CrossTenantAccessPolicy} from './index';
import {serializeCrossTenantAccessPolicyConfigurationDefault} from './serializeCrossTenantAccessPolicyConfigurationDefault';
import {serializeCrossTenantAccessPolicyConfigurationPartner} from './serializeCrossTenantAccessPolicyConfigurationPartner';
import {serializePolicyBase} from './serializePolicyBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCrossTenantAccessPolicy(writer: SerializationWriter, crossTenantAccessPolicy: CrossTenantAccessPolicy | undefined = {}) : void {
        serializePolicyBase(writer, crossTenantAccessPolicy)
            writer.writeCollectionOfPrimitiveValues<string>("allowedCloudEndpoints", crossTenantAccessPolicy.allowedCloudEndpoints);
            writer.writeObjectValueFromMethod("default_escaped", crossTenantAccessPolicy.default_escaped as any, serializeCrossTenantAccessPolicyConfigurationDefault);
            writer.writeCollectionOfObjectValuesFromMethod("partners", crossTenantAccessPolicy.partners as any, serializeCrossTenantAccessPolicyConfigurationPartner);
}
