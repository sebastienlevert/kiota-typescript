import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {CommentAction} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCommentAction(commentAction: CommentAction | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "isReply": n => { commentAction.isReply = n.getBooleanValue() as any ; },
        "parentAuthor": n => { commentAction.parentAuthor = n.getObject(deserializeIntoIdentitySet) as any ; },
        "participants": n => { commentAction.participants = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIdentitySet) as any ; },
    }
}
