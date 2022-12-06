import {deserializeIntoAssignmentOrder} from '../../../../../models/deserializeIntoAssignmentOrder';
import {SetOrderPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSetOrderPostRequestBody(setOrderPostRequestBody: SetOrderPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "newAssignmentOrder": n => { setOrderPostRequestBody.newAssignmentOrder = n.getObject(deserializeIntoAssignmentOrder) as any ; },
    }
}
