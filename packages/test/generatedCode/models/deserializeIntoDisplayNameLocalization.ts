import {DisplayNameLocalization} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDisplayNameLocalization(displayNameLocalization: DisplayNameLocalization | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { displayNameLocalization.displayName = n.getStringValue() as any ; },
        "languageTag": n => { displayNameLocalization.languageTag = n.getStringValue() as any ; },
    }
}
