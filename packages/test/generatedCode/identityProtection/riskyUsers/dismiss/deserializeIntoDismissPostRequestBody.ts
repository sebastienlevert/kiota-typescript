import {DismissPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDismissPostRequestBody(dismissPostRequestBody: DismissPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "userIds": n => { dismissPostRequestBody.userIds = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
