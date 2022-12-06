import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoMobileAppContentFile} from './deserializeIntoMobileAppContentFile';
import {MobileAppContentFileCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileAppContentFileCollectionResponse(mobileAppContentFileCollectionResponse: MobileAppContentFileCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(mobileAppContentFileCollectionResponse),
        "value": n => { mobileAppContentFileCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMobileAppContentFile) as any ; },
    }
}
