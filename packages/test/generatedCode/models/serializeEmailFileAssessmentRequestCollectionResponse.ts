import {EmailFileAssessmentRequestCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEmailFileAssessmentRequest} from './serializeEmailFileAssessmentRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEmailFileAssessmentRequestCollectionResponse(writer: SerializationWriter, emailFileAssessmentRequestCollectionResponse: EmailFileAssessmentRequestCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, emailFileAssessmentRequestCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", emailFileAssessmentRequestCollectionResponse.value as any, serializeEmailFileAssessmentRequest);
}
