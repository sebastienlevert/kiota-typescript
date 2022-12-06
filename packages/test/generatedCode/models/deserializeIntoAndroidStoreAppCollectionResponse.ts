import {deserializeIntoAndroidStoreApp} from './deserializeIntoAndroidStoreApp';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AndroidStoreAppCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidStoreAppCollectionResponse(androidStoreAppCollectionResponse: AndroidStoreAppCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(androidStoreAppCollectionResponse),
        "value": n => { androidStoreAppCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAndroidStoreApp) as any ; },
    }
}
