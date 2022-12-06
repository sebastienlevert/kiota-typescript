import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoIosVppEBook} from './deserializeIntoIosVppEBook';
import {IosVppEBookCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosVppEBookCollectionResponse(iosVppEBookCollectionResponse: IosVppEBookCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(iosVppEBookCollectionResponse),
        "value": n => { iosVppEBookCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIosVppEBook) as any ; },
    }
}
