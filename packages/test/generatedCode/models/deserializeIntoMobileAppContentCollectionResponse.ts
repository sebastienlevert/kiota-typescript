import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoMobileAppContent} from './deserializeIntoMobileAppContent';
import {MobileAppContentCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileAppContentCollectionResponse(mobileAppContentCollectionResponse: MobileAppContentCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(mobileAppContentCollectionResponse),
        "value": n => { mobileAppContentCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMobileAppContent) as any ; },
    }
}
