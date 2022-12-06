import {TargetedManagedAppPolicyAssignmentCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTargetedManagedAppPolicyAssignment} from './serializeTargetedManagedAppPolicyAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTargetedManagedAppPolicyAssignmentCollectionResponse(writer: SerializationWriter, targetedManagedAppPolicyAssignmentCollectionResponse: TargetedManagedAppPolicyAssignmentCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, targetedManagedAppPolicyAssignmentCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", targetedManagedAppPolicyAssignmentCollectionResponse.value as any, serializeTargetedManagedAppPolicyAssignment);
}
