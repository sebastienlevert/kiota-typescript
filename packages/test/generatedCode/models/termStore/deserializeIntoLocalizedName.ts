import {LocalizedName} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLocalizedName(localizedName: LocalizedName | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "languageTag": n => { localizedName.languageTag = n.getStringValue() as any ; },
        "name": n => { localizedName.name = n.getStringValue() as any ; },
    }
}
