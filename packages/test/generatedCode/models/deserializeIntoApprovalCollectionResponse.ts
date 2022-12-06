import {deserializeIntoApproval} from './deserializeIntoApproval';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {ApprovalCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApprovalCollectionResponse(approvalCollectionResponse: ApprovalCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(approvalCollectionResponse),
        "value": n => { approvalCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoApproval) as any ; },
    }
}
