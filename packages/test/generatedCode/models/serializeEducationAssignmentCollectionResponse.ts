import {EducationAssignmentCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEducationAssignment} from './serializeEducationAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationAssignmentCollectionResponse(writer: SerializationWriter, educationAssignmentCollectionResponse: EducationAssignmentCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, educationAssignmentCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", educationAssignmentCollectionResponse.value as any, serializeEducationAssignment);
}
