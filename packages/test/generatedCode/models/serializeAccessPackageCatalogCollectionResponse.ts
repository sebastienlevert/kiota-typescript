import {AccessPackageCatalogCollectionResponse} from './index';
import {serializeAccessPackageCatalog} from './serializeAccessPackageCatalog';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageCatalogCollectionResponse(writer: SerializationWriter, accessPackageCatalogCollectionResponse: AccessPackageCatalogCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessPackageCatalogCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", accessPackageCatalogCollectionResponse.value as any, serializeAccessPackageCatalog);
}
