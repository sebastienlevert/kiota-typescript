import {LocaleInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLocaleInfo(writer: SerializationWriter, localeInfo: LocaleInfo | undefined = {}) : void {
            writer.writeStringValue("displayName", localeInfo.displayName);
            writer.writeStringValue("locale", localeInfo.locale);
}
