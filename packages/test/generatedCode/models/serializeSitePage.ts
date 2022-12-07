import {SitePage} from './index';
import {serializeBaseItem} from './serializeBaseItem';
import {serializeContentTypeInfo} from './serializeContentTypeInfo';
import {serializePublicationFacet} from './serializePublicationFacet';
import {serializeWebPart} from './serializeWebPart';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSitePage(writer: SerializationWriter, sitePage: SitePage | undefined = {}) : void {
        serializeBaseItem(writer, sitePage)
            writer.writeObjectValueFromMethod("contentType", sitePage.contentType as any, serializeContentTypeInfo);
            writer.writeStringValue("pageLayoutType", sitePage.pageLayoutType);
            writer.writeObjectValueFromMethod("publishingState", sitePage.publishingState as any, serializePublicationFacet);
            writer.writeStringValue("title", sitePage.title);
            writer.writeCollectionOfObjectValuesFromMethod("webParts", sitePage.webParts as any, serializeWebPart);
}
