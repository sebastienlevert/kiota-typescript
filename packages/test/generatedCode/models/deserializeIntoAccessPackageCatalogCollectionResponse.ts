import {deserializeIntoAccessPackageCatalog} from './deserializeIntoAccessPackageCatalog';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AccessPackageCatalogCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageCatalogCollectionResponse(accessPackageCatalogCollectionResponse: AccessPackageCatalogCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessPackageCatalogCollectionResponse),
        "value": n => { accessPackageCatalogCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessPackageCatalog) as any ; },
    }
}
