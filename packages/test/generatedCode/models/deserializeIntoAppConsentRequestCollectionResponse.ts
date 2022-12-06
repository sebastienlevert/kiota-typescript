import {deserializeIntoAppConsentRequest} from './deserializeIntoAppConsentRequest';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AppConsentRequestCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppConsentRequestCollectionResponse(appConsentRequestCollectionResponse: AppConsentRequestCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(appConsentRequestCollectionResponse),
        "value": n => { appConsentRequestCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAppConsentRequest) as any ; },
    }
}
