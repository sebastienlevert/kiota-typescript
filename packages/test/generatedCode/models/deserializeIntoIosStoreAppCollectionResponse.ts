import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoIosStoreApp} from './deserializeIntoIosStoreApp';
import {IosStoreAppCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosStoreAppCollectionResponse(iosStoreAppCollectionResponse: IosStoreAppCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(iosStoreAppCollectionResponse),
        "value": n => { iosStoreAppCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIosStoreApp) as any ; },
    }
}
