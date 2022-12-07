import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {ShareAction} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoShareAction(shareAction: ShareAction | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "recipients": n => { shareAction.recipients = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIdentitySet) as any ; },
    }
}
