import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoManagedAppPolicyDeploymentSummaryPerApp} from './deserializeIntoManagedAppPolicyDeploymentSummaryPerApp';
import {ManagedAppPolicyDeploymentSummary} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAppPolicyDeploymentSummary(managedAppPolicyDeploymentSummary: ManagedAppPolicyDeploymentSummary | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(managedAppPolicyDeploymentSummary),
        "configurationDeployedUserCount": n => { managedAppPolicyDeploymentSummary.configurationDeployedUserCount = n.getNumberValue() as any ; },
        "configurationDeploymentSummaryPerApp": n => { managedAppPolicyDeploymentSummary.configurationDeploymentSummaryPerApp = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedAppPolicyDeploymentSummaryPerApp) as any ; },
        "displayName": n => { managedAppPolicyDeploymentSummary.displayName = n.getStringValue() as any ; },
        "lastRefreshTime": n => { managedAppPolicyDeploymentSummary.lastRefreshTime = n.getDateValue() as any ; },
        "version": n => { managedAppPolicyDeploymentSummary.version = n.getStringValue() as any ; },
    }
}
