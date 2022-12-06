import {EducationAssignmentResourceCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEducationAssignmentResource} from './serializeEducationAssignmentResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationAssignmentResourceCollectionResponse(writer: SerializationWriter, educationAssignmentResourceCollectionResponse: EducationAssignmentResourceCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, educationAssignmentResourceCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", educationAssignmentResourceCollectionResponse.value as any, serializeEducationAssignmentResource);
}
