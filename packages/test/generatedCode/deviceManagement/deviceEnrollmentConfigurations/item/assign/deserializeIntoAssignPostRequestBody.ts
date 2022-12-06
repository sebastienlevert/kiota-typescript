import {deserializeIntoEnrollmentConfigurationAssignment} from '../../../../models/deserializeIntoEnrollmentConfigurationAssignment';
import {AssignPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAssignPostRequestBody(assignPostRequestBody: AssignPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "enrollmentConfigurationAssignments": n => { assignPostRequestBody.enrollmentConfigurationAssignments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEnrollmentConfigurationAssignment) as any ; },
    }
}
