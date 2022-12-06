import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoMobileLobApp} from './deserializeIntoMobileLobApp';
import {MobileLobAppCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileLobAppCollectionResponse(mobileLobAppCollectionResponse: MobileLobAppCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(mobileLobAppCollectionResponse),
        "value": n => { mobileLobAppCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMobileLobApp) as any ; },
    }
}
