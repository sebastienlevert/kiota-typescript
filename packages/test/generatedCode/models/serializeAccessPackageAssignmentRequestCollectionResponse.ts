import {AccessPackageAssignmentRequestCollectionResponse} from './index';
import {serializeAccessPackageAssignmentRequest} from './serializeAccessPackageAssignmentRequest';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageAssignmentRequestCollectionResponse(writer: SerializationWriter, accessPackageAssignmentRequestCollectionResponse: AccessPackageAssignmentRequestCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessPackageAssignmentRequestCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", accessPackageAssignmentRequestCollectionResponse.value as any, serializeAccessPackageAssignmentRequest);
}
