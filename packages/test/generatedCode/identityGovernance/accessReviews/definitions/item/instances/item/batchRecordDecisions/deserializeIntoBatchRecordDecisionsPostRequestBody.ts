import {BatchRecordDecisionsPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBatchRecordDecisionsPostRequestBody(batchRecordDecisionsPostRequestBody: BatchRecordDecisionsPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "decision": n => { batchRecordDecisionsPostRequestBody.decision = n.getStringValue() as any ; },
        "justification": n => { batchRecordDecisionsPostRequestBody.justification = n.getStringValue() as any ; },
        "principalId": n => { batchRecordDecisionsPostRequestBody.principalId = n.getStringValue() as any ; },
        "resourceId": n => { batchRecordDecisionsPostRequestBody.resourceId = n.getStringValue() as any ; },
    }
}
