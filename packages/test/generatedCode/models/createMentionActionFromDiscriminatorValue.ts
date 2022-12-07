import {MentionAction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMentionActionFromDiscriminatorValue(parseNode: ParseNode | undefined) : MentionAction {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MentionAction();
}
