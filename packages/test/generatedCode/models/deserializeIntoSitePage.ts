import {deserializeIntoBaseItem} from './deserializeIntoBaseItem';
import {deserializeIntoContentTypeInfo} from './deserializeIntoContentTypeInfo';
import {deserializeIntoPublicationFacet} from './deserializeIntoPublicationFacet';
import {deserializeIntoWebPart} from './deserializeIntoWebPart';
import {SitePage} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSitePage(sitePage: SitePage | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseItem(sitePage),
        "contentType": n => { sitePage.contentType = n.getObject(deserializeIntoContentTypeInfo) as any ; },
        "pageLayoutType": n => { sitePage.pageLayoutType = n.getStringValue() as any ; },
        "publishingState": n => { sitePage.publishingState = n.getObject(deserializeIntoPublicationFacet) as any ; },
        "title": n => { sitePage.title = n.getStringValue() as any ; },
        "webParts": n => { sitePage.webParts = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWebPart) as any ; },
    }
}
