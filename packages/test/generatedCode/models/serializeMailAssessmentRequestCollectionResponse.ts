import {MailAssessmentRequestCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMailAssessmentRequest} from './serializeMailAssessmentRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMailAssessmentRequestCollectionResponse(writer: SerializationWriter, mailAssessmentRequestCollectionResponse: MailAssessmentRequestCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, mailAssessmentRequestCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", mailAssessmentRequestCollectionResponse.value as any, serializeMailAssessmentRequest);
}
