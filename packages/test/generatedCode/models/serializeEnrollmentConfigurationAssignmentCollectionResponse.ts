import {EnrollmentConfigurationAssignmentCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEnrollmentConfigurationAssignment} from './serializeEnrollmentConfigurationAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEnrollmentConfigurationAssignmentCollectionResponse(writer: SerializationWriter, enrollmentConfigurationAssignmentCollectionResponse: EnrollmentConfigurationAssignmentCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, enrollmentConfigurationAssignmentCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", enrollmentConfigurationAssignmentCollectionResponse.value as any, serializeEnrollmentConfigurationAssignment);
}
