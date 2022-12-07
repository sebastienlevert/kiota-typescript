import {MentionAction} from './index';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMentionAction(writer: SerializationWriter, mentionAction: MentionAction | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("mentionees", mentionAction.mentionees as any, serializeIdentitySet);
}
