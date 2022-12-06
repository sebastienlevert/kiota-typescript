import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUserConsentRequest} from './deserializeIntoUserConsentRequest';
import {UserConsentRequestCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserConsentRequestCollectionResponse(userConsentRequestCollectionResponse: UserConsentRequestCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userConsentRequestCollectionResponse),
        "value": n => { userConsentRequestCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUserConsentRequest) as any ; },
    }
}
