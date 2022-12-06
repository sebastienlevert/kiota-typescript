import {deserializeIntoAndroidLobApp} from './deserializeIntoAndroidLobApp';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AndroidLobAppCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidLobAppCollectionResponse(androidLobAppCollectionResponse: AndroidLobAppCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(androidLobAppCollectionResponse),
        "value": n => { androidLobAppCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAndroidLobApp) as any ; },
    }
}
