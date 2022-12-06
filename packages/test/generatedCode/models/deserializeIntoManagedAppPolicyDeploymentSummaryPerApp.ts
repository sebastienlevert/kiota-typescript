import {deserializeIntoMobileAppIdentifier} from './deserializeIntoMobileAppIdentifier';
import {ManagedAppPolicyDeploymentSummaryPerApp} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAppPolicyDeploymentSummaryPerApp(managedAppPolicyDeploymentSummaryPerApp: ManagedAppPolicyDeploymentSummaryPerApp | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "configurationAppliedUserCount": n => { managedAppPolicyDeploymentSummaryPerApp.configurationAppliedUserCount = n.getNumberValue() as any ; },
        "mobileAppIdentifier": n => { managedAppPolicyDeploymentSummaryPerApp.mobileAppIdentifier = n.getObject(deserializeIntoMobileAppIdentifier) as any ; },
        "@odata.type": n => { managedAppPolicyDeploymentSummaryPerApp.odataType = n.getStringValue() as any ; },
    }
}
