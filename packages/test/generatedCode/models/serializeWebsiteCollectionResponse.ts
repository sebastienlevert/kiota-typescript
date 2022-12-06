import {WebsiteCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWebsite} from './serializeWebsite';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWebsiteCollectionResponse(writer: SerializationWriter, websiteCollectionResponse: WebsiteCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, websiteCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", websiteCollectionResponse.value as any, serializeWebsite);
}
