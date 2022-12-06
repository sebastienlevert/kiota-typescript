import {ConfirmCompromisedPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConfirmCompromisedPostRequestBody(confirmCompromisedPostRequestBody: ConfirmCompromisedPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "userIds": n => { confirmCompromisedPostRequestBody.userIds = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
