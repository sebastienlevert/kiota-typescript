import {deserializeIntoApprovalStage} from './deserializeIntoApprovalStage';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {ApprovalStageCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApprovalStageCollectionResponse(approvalStageCollectionResponse: ApprovalStageCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(approvalStageCollectionResponse),
        "value": n => { approvalStageCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoApprovalStage) as any ; },
    }
}
