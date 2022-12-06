import {UnifiedApprovalStageCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedApprovalStage} from './serializeUnifiedApprovalStage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedApprovalStageCollectionResponse(writer: SerializationWriter, unifiedApprovalStageCollectionResponse: UnifiedApprovalStageCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedApprovalStageCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", unifiedApprovalStageCollectionResponse.value as any, serializeUnifiedApprovalStage);
}
