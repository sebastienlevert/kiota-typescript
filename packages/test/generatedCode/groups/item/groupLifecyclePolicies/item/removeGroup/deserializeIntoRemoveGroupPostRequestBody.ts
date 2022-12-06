import {RemoveGroupPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRemoveGroupPostRequestBody(removeGroupPostRequestBody: RemoveGroupPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "groupId": n => { removeGroupPostRequestBody.groupId = n.getStringValue() as any ; },
    }
}
