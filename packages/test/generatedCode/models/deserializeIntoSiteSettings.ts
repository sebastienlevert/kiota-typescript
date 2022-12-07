import {SiteSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSiteSettings(siteSettings: SiteSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "languageTag": n => { siteSettings.languageTag = n.getStringValue() as any ; },
        "timeZone": n => { siteSettings.timeZone = n.getStringValue() as any ; },
    }
}
