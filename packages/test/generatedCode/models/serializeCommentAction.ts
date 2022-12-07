import {CommentAction} from './index';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCommentAction(writer: SerializationWriter, commentAction: CommentAction | undefined = {}) : void {
            writer.writeBooleanValue("isReply", commentAction.isReply);
            writer.writeObjectValueFromMethod("parentAuthor", commentAction.parentAuthor as any, serializeIdentitySet);
            writer.writeCollectionOfObjectValuesFromMethod("participants", commentAction.participants as any, serializeIdentitySet);
}
