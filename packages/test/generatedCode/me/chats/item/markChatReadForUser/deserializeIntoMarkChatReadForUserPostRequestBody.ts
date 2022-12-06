import {deserializeIntoTeamworkUserIdentity} from '../../../../models/deserializeIntoTeamworkUserIdentity';
import {MarkChatReadForUserPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMarkChatReadForUserPostRequestBody(markChatReadForUserPostRequestBody: MarkChatReadForUserPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "user": n => { markChatReadForUserPostRequestBody.user = n.getObject(deserializeIntoTeamworkUserIdentity) as any ; },
    }
}
