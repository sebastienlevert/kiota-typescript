import {LocalizedLabel} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLocalizedLabel(localizedLabel: LocalizedLabel | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "isDefault": n => { localizedLabel.isDefault = n.getBooleanValue() as any ; },
        "languageTag": n => { localizedLabel.languageTag = n.getStringValue() as any ; },
        "name": n => { localizedLabel.name = n.getStringValue() as any ; },
    }
}
