import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUserConsentRequest} from '../../../../../../models/deserializeIntoUserConsentRequest';
import {FilterByCurrentUserWithOnResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFilterByCurrentUserWithOnResponse(filterByCurrentUserWithOnResponse: FilterByCurrentUserWithOnResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(filterByCurrentUserWithOnResponse),
        "value": n => { filterByCurrentUserWithOnResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUserConsentRequest) as any ; },
    }
}
