import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEmailFileAssessmentRequest} from './deserializeIntoEmailFileAssessmentRequest';
import {EmailFileAssessmentRequestCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEmailFileAssessmentRequestCollectionResponse(emailFileAssessmentRequestCollectionResponse: EmailFileAssessmentRequestCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(emailFileAssessmentRequestCollectionResponse),
        "value": n => { emailFileAssessmentRequestCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEmailFileAssessmentRequest) as any ; },
    }
}
