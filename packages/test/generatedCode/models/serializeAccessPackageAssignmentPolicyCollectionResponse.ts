import {AccessPackageAssignmentPolicyCollectionResponse} from './index';
import {serializeAccessPackageAssignmentPolicy} from './serializeAccessPackageAssignmentPolicy';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageAssignmentPolicyCollectionResponse(writer: SerializationWriter, accessPackageAssignmentPolicyCollectionResponse: AccessPackageAssignmentPolicyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessPackageAssignmentPolicyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", accessPackageAssignmentPolicyCollectionResponse.value as any, serializeAccessPackageAssignmentPolicy);
}
