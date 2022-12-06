import {AccessPackageAssignmentCollectionResponse} from './index';
import {serializeAccessPackageAssignment} from './serializeAccessPackageAssignment';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageAssignmentCollectionResponse(writer: SerializationWriter, accessPackageAssignmentCollectionResponse: AccessPackageAssignmentCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessPackageAssignmentCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", accessPackageAssignmentCollectionResponse.value as any, serializeAccessPackageAssignment);
}
