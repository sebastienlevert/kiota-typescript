import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoInternetMessageHeader} from './deserializeIntoInternetMessageHeader';
import {InternetMessageHeaderCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInternetMessageHeaderCollectionResponse(internetMessageHeaderCollectionResponse: InternetMessageHeaderCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(internetMessageHeaderCollectionResponse),
        "value": n => { internetMessageHeaderCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoInternetMessageHeader) as any ; },
    }
}
