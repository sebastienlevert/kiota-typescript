import {BatchRecordDecisionsPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBatchRecordDecisionsPostRequestBody(writer: SerializationWriter, batchRecordDecisionsPostRequestBody: BatchRecordDecisionsPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("decision", batchRecordDecisionsPostRequestBody.decision);
            writer.writeStringValue("justification", batchRecordDecisionsPostRequestBody.justification);
            writer.writeStringValue("principalId", batchRecordDecisionsPostRequestBody.principalId);
            writer.writeStringValue("resourceId", batchRecordDecisionsPostRequestBody.resourceId);
}
