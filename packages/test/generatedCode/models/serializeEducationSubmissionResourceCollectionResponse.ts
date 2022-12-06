import {EducationSubmissionResourceCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEducationSubmissionResource} from './serializeEducationSubmissionResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationSubmissionResourceCollectionResponse(writer: SerializationWriter, educationSubmissionResourceCollectionResponse: EducationSubmissionResourceCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, educationSubmissionResourceCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", educationSubmissionResourceCollectionResponse.value as any, serializeEducationSubmissionResource);
}
