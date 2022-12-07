import {Website} from './index';
import {WebsiteType} from './websiteType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWebsite(website: Website | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "address": n => { website.address = n.getStringValue() as any ; },
        "displayName": n => { website.displayName = n.getStringValue() as any ; },
        "type": n => { website.type = n.getEnumValue<WebsiteType>(WebsiteType) as any ; },
    }
}
