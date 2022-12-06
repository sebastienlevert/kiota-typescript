import {TargetedManagedAppConfiguration} from './index';
import {serializeManagedAppConfiguration} from './serializeManagedAppConfiguration';
import {serializeManagedAppPolicyDeploymentSummary} from './serializeManagedAppPolicyDeploymentSummary';
import {serializeManagedMobileApp} from './serializeManagedMobileApp';
import {serializeTargetedManagedAppPolicyAssignment} from './serializeTargetedManagedAppPolicyAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTargetedManagedAppConfiguration(writer: SerializationWriter, targetedManagedAppConfiguration: TargetedManagedAppConfiguration | undefined = {}) : void {
        serializeManagedAppConfiguration(writer, targetedManagedAppConfiguration)
            writer.writeCollectionOfObjectValuesFromMethod("apps", targetedManagedAppConfiguration.apps as any, serializeManagedMobileApp);
            writer.writeCollectionOfObjectValuesFromMethod("assignments", targetedManagedAppConfiguration.assignments as any, serializeTargetedManagedAppPolicyAssignment);
            writer.writeNumberValue("deployedAppCount", targetedManagedAppConfiguration.deployedAppCount);
            writer.writeObjectValueFromMethod("deploymentSummary", targetedManagedAppConfiguration.deploymentSummary as any, serializeManagedAppPolicyDeploymentSummary);
            writer.writeBooleanValue("isAssigned", targetedManagedAppConfiguration.isAssigned);
}
