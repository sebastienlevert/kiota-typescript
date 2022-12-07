import {deserializeIntoSitePageData} from './deserializeIntoSitePageData';
import {WebPart} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWebPart(webPart: WebPart | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "data": n => { webPart.data = n.getObject(deserializeIntoSitePageData) as any ; },
        "type": n => { webPart.type = n.getStringValue() as any ; },
    }
}
