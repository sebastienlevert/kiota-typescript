import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoTermsAndConditions} from './deserializeIntoTermsAndConditions';
import {TermsAndConditionsCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTermsAndConditionsCollectionResponse(termsAndConditionsCollectionResponse: TermsAndConditionsCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(termsAndConditionsCollectionResponse),
        "value": n => { termsAndConditionsCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTermsAndConditions) as any ; },
    }
}
