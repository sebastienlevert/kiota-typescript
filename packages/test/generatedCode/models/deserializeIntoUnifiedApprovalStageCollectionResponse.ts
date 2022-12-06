import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUnifiedApprovalStage} from './deserializeIntoUnifiedApprovalStage';
import {UnifiedApprovalStageCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedApprovalStageCollectionResponse(unifiedApprovalStageCollectionResponse: UnifiedApprovalStageCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unifiedApprovalStageCollectionResponse),
        "value": n => { unifiedApprovalStageCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUnifiedApprovalStage) as any ; },
    }
}
