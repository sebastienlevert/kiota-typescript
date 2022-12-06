import {UrlAssessmentRequestCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUrlAssessmentRequest} from './serializeUrlAssessmentRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUrlAssessmentRequestCollectionResponse(writer: SerializationWriter, urlAssessmentRequestCollectionResponse: UrlAssessmentRequestCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, urlAssessmentRequestCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", urlAssessmentRequestCollectionResponse.value as any, serializeUrlAssessmentRequest);
}
