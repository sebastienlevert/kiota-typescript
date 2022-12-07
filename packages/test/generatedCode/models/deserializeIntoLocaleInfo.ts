import {LocaleInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLocaleInfo(localeInfo: LocaleInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { localeInfo.displayName = n.getStringValue() as any ; },
        "locale": n => { localeInfo.locale = n.getStringValue() as any ; },
    }
}
