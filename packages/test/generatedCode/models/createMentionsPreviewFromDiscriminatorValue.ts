import {MentionsPreview} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMentionsPreviewFromDiscriminatorValue(parseNode: ParseNode | undefined) : MentionsPreview {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MentionsPreview();
}
