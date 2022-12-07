import {MentionsPreview} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMentionsPreview(writer: SerializationWriter, mentionsPreview: MentionsPreview | undefined = {}) : void {
            writer.writeBooleanValue("isMentioned", mentionsPreview.isMentioned);
}
