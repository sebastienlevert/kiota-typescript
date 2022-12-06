import {AddGroupPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddGroupPostRequestBody(addGroupPostRequestBody: AddGroupPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "groupId": n => { addGroupPostRequestBody.groupId = n.getStringValue() as any ; },
    }
}
