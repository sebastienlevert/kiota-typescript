import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {SiteSourceCollectionResponse} from './index';
import {serializeSiteSource} from './serializeSiteSource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSiteSourceCollectionResponse(writer: SerializationWriter, siteSourceCollectionResponse: SiteSourceCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, siteSourceCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", siteSourceCollectionResponse.value as any, serializeSiteSource);
}
