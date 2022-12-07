import {CommentAction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCommentActionFromDiscriminatorValue(parseNode: ParseNode | undefined) : CommentAction {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CommentAction();
}
