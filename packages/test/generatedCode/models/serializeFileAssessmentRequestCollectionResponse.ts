import {FileAssessmentRequestCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeFileAssessmentRequest} from './serializeFileAssessmentRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFileAssessmentRequestCollectionResponse(writer: SerializationWriter, fileAssessmentRequestCollectionResponse: FileAssessmentRequestCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, fileAssessmentRequestCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", fileAssessmentRequestCollectionResponse.value as any, serializeFileAssessmentRequest);
}
