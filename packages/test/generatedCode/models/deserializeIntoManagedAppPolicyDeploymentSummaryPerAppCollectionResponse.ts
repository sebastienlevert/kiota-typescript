import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoManagedAppPolicyDeploymentSummaryPerApp} from './deserializeIntoManagedAppPolicyDeploymentSummaryPerApp';
import {ManagedAppPolicyDeploymentSummaryPerAppCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAppPolicyDeploymentSummaryPerAppCollectionResponse(managedAppPolicyDeploymentSummaryPerAppCollectionResponse: ManagedAppPolicyDeploymentSummaryPerAppCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedAppPolicyDeploymentSummaryPerAppCollectionResponse),
        "value": n => { managedAppPolicyDeploymentSummaryPerAppCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedAppPolicyDeploymentSummaryPerApp) as any ; },
    }
}
