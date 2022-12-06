import {CheckMemberObjectsPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCheckMemberObjectsPostRequestBody(checkMemberObjectsPostRequestBody: CheckMemberObjectsPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "ids": n => { checkMemberObjectsPostRequestBody.ids = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
