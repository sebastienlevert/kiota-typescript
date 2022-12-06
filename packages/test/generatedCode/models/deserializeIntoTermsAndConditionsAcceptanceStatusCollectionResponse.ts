import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoTermsAndConditionsAcceptanceStatus} from './deserializeIntoTermsAndConditionsAcceptanceStatus';
import {TermsAndConditionsAcceptanceStatusCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTermsAndConditionsAcceptanceStatusCollectionResponse(termsAndConditionsAcceptanceStatusCollectionResponse: TermsAndConditionsAcceptanceStatusCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(termsAndConditionsAcceptanceStatusCollectionResponse),
        "value": n => { termsAndConditionsAcceptanceStatusCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTermsAndConditionsAcceptanceStatus) as any ; },
    }
}
