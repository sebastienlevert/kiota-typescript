import {GetPresencesByUserIdPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetPresencesByUserIdPostRequestBody(getPresencesByUserIdPostRequestBody: GetPresencesByUserIdPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "ids": n => { getPresencesByUserIdPostRequestBody.ids = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
