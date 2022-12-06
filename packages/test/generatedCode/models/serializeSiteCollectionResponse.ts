import {SiteCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSite} from './serializeSite';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSiteCollectionResponse(writer: SerializationWriter, siteCollectionResponse: SiteCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, siteCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", siteCollectionResponse.value as any, serializeSite);
}
