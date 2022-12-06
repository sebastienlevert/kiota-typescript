import {ManagedAppPolicyDeploymentSummaryPerApp} from './index';
import {serializeMobileAppIdentifier} from './serializeMobileAppIdentifier';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedAppPolicyDeploymentSummaryPerApp(writer: SerializationWriter, managedAppPolicyDeploymentSummaryPerApp: ManagedAppPolicyDeploymentSummaryPerApp | undefined = {}) : void {
            writer.writeNumberValue("configurationAppliedUserCount", managedAppPolicyDeploymentSummaryPerApp.configurationAppliedUserCount);
            writer.writeObjectValueFromMethod("mobileAppIdentifier", managedAppPolicyDeploymentSummaryPerApp.mobileAppIdentifier as any, serializeMobileAppIdentifier);
            writer.writeStringValue("@odata.type", managedAppPolicyDeploymentSummaryPerApp.odataType);
}
