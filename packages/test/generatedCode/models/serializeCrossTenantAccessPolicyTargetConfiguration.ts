import {CrossTenantAccessPolicyTargetConfigurationAccessType} from './crossTenantAccessPolicyTargetConfigurationAccessType';
import {CrossTenantAccessPolicyTargetConfiguration} from './index';
import {serializeCrossTenantAccessPolicyTarget} from './serializeCrossTenantAccessPolicyTarget';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCrossTenantAccessPolicyTargetConfiguration(writer: SerializationWriter, crossTenantAccessPolicyTargetConfiguration: CrossTenantAccessPolicyTargetConfiguration | undefined = {}) : void {
            writer.writeEnumValue<CrossTenantAccessPolicyTargetConfigurationAccessType>("accessType", crossTenantAccessPolicyTargetConfiguration.accessType);
            writer.writeStringValue("@odata.type", crossTenantAccessPolicyTargetConfiguration.odataType);
            writer.writeCollectionOfObjectValuesFromMethod("targets", crossTenantAccessPolicyTargetConfiguration.targets as any, serializeCrossTenantAccessPolicyTarget);
}
