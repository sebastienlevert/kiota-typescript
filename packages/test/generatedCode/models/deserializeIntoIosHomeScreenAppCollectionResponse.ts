import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoIosHomeScreenApp} from './deserializeIntoIosHomeScreenApp';
import {IosHomeScreenAppCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosHomeScreenAppCollectionResponse(iosHomeScreenAppCollectionResponse: IosHomeScreenAppCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(iosHomeScreenAppCollectionResponse),
        "value": n => { iosHomeScreenAppCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIosHomeScreenApp) as any ; },
    }
}
