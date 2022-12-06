import {deserializeIntoAppConsentRequestScope} from './deserializeIntoAppConsentRequestScope';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AppConsentRequestScopeCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppConsentRequestScopeCollectionResponse(appConsentRequestScopeCollectionResponse: AppConsentRequestScopeCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(appConsentRequestScopeCollectionResponse),
        "value": n => { appConsentRequestScopeCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAppConsentRequestScope) as any ; },
    }
}
