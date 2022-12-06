import {ManagedAppPolicyDeploymentSummary} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeManagedAppPolicyDeploymentSummaryPerApp} from './serializeManagedAppPolicyDeploymentSummaryPerApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedAppPolicyDeploymentSummary(writer: SerializationWriter, managedAppPolicyDeploymentSummary: ManagedAppPolicyDeploymentSummary | undefined = {}) : void {
        serializeEntity(writer, managedAppPolicyDeploymentSummary)
            writer.writeNumberValue("configurationDeployedUserCount", managedAppPolicyDeploymentSummary.configurationDeployedUserCount);
            writer.writeCollectionOfObjectValuesFromMethod("configurationDeploymentSummaryPerApp", managedAppPolicyDeploymentSummary.configurationDeploymentSummaryPerApp as any, serializeManagedAppPolicyDeploymentSummaryPerApp);
            writer.writeStringValue("displayName", managedAppPolicyDeploymentSummary.displayName);
            writer.writeDateValue("lastRefreshTime", managedAppPolicyDeploymentSummary.lastRefreshTime);
            writer.writeStringValue("version", managedAppPolicyDeploymentSummary.version);
}
