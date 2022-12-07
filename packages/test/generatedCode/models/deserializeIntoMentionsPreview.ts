import {MentionsPreview} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMentionsPreview(mentionsPreview: MentionsPreview | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "isMentioned": n => { mentionsPreview.isMentioned = n.getBooleanValue() as any ; },
    }
}
