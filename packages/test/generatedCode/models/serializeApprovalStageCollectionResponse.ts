import {ApprovalStageCollectionResponse} from './index';
import {serializeApprovalStage} from './serializeApprovalStage';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApprovalStageCollectionResponse(writer: SerializationWriter, approvalStageCollectionResponse: ApprovalStageCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, approvalStageCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", approvalStageCollectionResponse.value as any, serializeApprovalStage);
}
