import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoTermsAndConditionsAssignment} from './deserializeIntoTermsAndConditionsAssignment';
import {TermsAndConditionsAssignmentCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTermsAndConditionsAssignmentCollectionResponse(termsAndConditionsAssignmentCollectionResponse: TermsAndConditionsAssignmentCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(termsAndConditionsAssignmentCollectionResponse),
        "value": n => { termsAndConditionsAssignmentCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTermsAndConditionsAssignment) as any ; },
    }
}
