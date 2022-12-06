import {ApprovalCollectionResponse} from './index';
import {serializeApproval} from './serializeApproval';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApprovalCollectionResponse(writer: SerializationWriter, approvalCollectionResponse: ApprovalCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, approvalCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", approvalCollectionResponse.value as any, serializeApproval);
}
