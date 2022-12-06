import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoIosLobApp} from './deserializeIntoIosLobApp';
import {IosLobAppCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosLobAppCollectionResponse(iosLobAppCollectionResponse: IosLobAppCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(iosLobAppCollectionResponse),
        "value": n => { iosLobAppCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIosLobApp) as any ; },
    }
}
