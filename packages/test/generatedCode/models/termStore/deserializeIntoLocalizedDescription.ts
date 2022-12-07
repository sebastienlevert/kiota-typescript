import {LocalizedDescription} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLocalizedDescription(localizedDescription: LocalizedDescription | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "description": n => { localizedDescription.description = n.getStringValue() as any ; },
        "languageTag": n => { localizedDescription.languageTag = n.getStringValue() as any ; },
    }
}
