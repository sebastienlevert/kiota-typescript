import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEnrollmentConfigurationAssignment} from './deserializeIntoEnrollmentConfigurationAssignment';
import {EnrollmentConfigurationAssignmentCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEnrollmentConfigurationAssignmentCollectionResponse(enrollmentConfigurationAssignmentCollectionResponse: EnrollmentConfigurationAssignmentCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(enrollmentConfigurationAssignmentCollectionResponse),
        "value": n => { enrollmentConfigurationAssignmentCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEnrollmentConfigurationAssignment) as any ; },
    }
}
