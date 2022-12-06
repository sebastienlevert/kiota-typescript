import {serializeEnrollmentConfigurationAssignment} from '../../../../models/serializeEnrollmentConfigurationAssignment';
import {AssignPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignPostRequestBody(writer: SerializationWriter, assignPostRequestBody: AssignPostRequestBody | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("enrollmentConfigurationAssignments", assignPostRequestBody.enrollmentConfigurationAssignments as any, serializeEnrollmentConfigurationAssignment);
}
