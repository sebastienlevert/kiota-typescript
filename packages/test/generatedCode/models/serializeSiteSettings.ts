import {SiteSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSiteSettings(writer: SerializationWriter, siteSettings: SiteSettings | undefined = {}) : void {
            writer.writeStringValue("languageTag", siteSettings.languageTag);
            writer.writeStringValue("timeZone", siteSettings.timeZone);
}
