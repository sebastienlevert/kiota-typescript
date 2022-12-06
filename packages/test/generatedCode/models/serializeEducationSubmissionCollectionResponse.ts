import {EducationSubmissionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEducationSubmission} from './serializeEducationSubmission';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationSubmissionCollectionResponse(writer: SerializationWriter, educationSubmissionCollectionResponse: EducationSubmissionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, educationSubmissionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", educationSubmissionCollectionResponse.value as any, serializeEducationSubmission);
}
