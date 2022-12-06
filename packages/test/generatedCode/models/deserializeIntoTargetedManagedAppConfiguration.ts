import {deserializeIntoManagedAppConfiguration} from './deserializeIntoManagedAppConfiguration';
import {deserializeIntoManagedAppPolicyDeploymentSummary} from './deserializeIntoManagedAppPolicyDeploymentSummary';
import {deserializeIntoManagedMobileApp} from './deserializeIntoManagedMobileApp';
import {deserializeIntoTargetedManagedAppPolicyAssignment} from './deserializeIntoTargetedManagedAppPolicyAssignment';
import {TargetedManagedAppConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTargetedManagedAppConfiguration(targetedManagedAppConfiguration: TargetedManagedAppConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedAppConfiguration(targetedManagedAppConfiguration),
        "apps": n => { targetedManagedAppConfiguration.apps = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedMobileApp) as any ; },
        "assignments": n => { targetedManagedAppConfiguration.assignments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTargetedManagedAppPolicyAssignment) as any ; },
        "deployedAppCount": n => { targetedManagedAppConfiguration.deployedAppCount = n.getNumberValue() as any ; },
        "deploymentSummary": n => { targetedManagedAppConfiguration.deploymentSummary = n.getObject(deserializeIntoManagedAppPolicyDeploymentSummary) as any ; },
        "isAssigned": n => { targetedManagedAppConfiguration.isAssigned = n.getBooleanValue() as any ; },
    }
}
