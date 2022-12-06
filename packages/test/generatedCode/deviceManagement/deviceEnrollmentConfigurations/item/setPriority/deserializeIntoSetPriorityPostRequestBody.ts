import {SetPriorityPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSetPriorityPostRequestBody(setPriorityPostRequestBody: SetPriorityPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "priority": n => { setPriorityPostRequestBody.priority = n.getNumberValue() as any ; },
    }
}
