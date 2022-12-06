import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoMobileApp} from './deserializeIntoMobileApp';
import {MobileAppCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileAppCollectionResponse(mobileAppCollectionResponse: MobileAppCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(mobileAppCollectionResponse),
        "value": n => { mobileAppCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMobileApp) as any ; },
    }
}
