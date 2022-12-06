import {deserializeIntoTeamworkUserIdentity} from '../../../../models/deserializeIntoTeamworkUserIdentity';
import {MarkChatUnreadForUserPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMarkChatUnreadForUserPostRequestBody(markChatUnreadForUserPostRequestBody: MarkChatUnreadForUserPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "lastMessageReadDateTime": n => { markChatUnreadForUserPostRequestBody.lastMessageReadDateTime = n.getDateValue() as any ; },
        "user": n => { markChatUnreadForUserPostRequestBody.user = n.getObject(deserializeIntoTeamworkUserIdentity) as any ; },
    }
}
