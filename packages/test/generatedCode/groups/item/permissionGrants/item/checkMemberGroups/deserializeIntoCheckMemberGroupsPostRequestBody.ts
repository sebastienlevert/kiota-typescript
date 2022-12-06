import {CheckMemberGroupsPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCheckMemberGroupsPostRequestBody(checkMemberGroupsPostRequestBody: CheckMemberGroupsPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "groupIds": n => { checkMemberGroupsPostRequestBody.groupIds = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
