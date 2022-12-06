import {ManagedAppPolicyDeploymentSummaryPerAppCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeManagedAppPolicyDeploymentSummaryPerApp} from './serializeManagedAppPolicyDeploymentSummaryPerApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedAppPolicyDeploymentSummaryPerAppCollectionResponse(writer: SerializationWriter, managedAppPolicyDeploymentSummaryPerAppCollectionResponse: ManagedAppPolicyDeploymentSummaryPerAppCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedAppPolicyDeploymentSummaryPerAppCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", managedAppPolicyDeploymentSummaryPerAppCollectionResponse.value as any, serializeManagedAppPolicyDeploymentSummaryPerApp);
}
