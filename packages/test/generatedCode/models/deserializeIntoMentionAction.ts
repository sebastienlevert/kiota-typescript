import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {MentionAction} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMentionAction(mentionAction: MentionAction | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "mentionees": n => { mentionAction.mentionees = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIdentitySet) as any ; },
    }
}
