import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEnrollmentTroubleshootingEvent} from './deserializeIntoEnrollmentTroubleshootingEvent';
import {EnrollmentTroubleshootingEventCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEnrollmentTroubleshootingEventCollectionResponse(enrollmentTroubleshootingEventCollectionResponse: EnrollmentTroubleshootingEventCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(enrollmentTroubleshootingEventCollectionResponse),
        "value": n => { enrollmentTroubleshootingEventCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEnrollmentTroubleshootingEvent) as any ; },
    }
}
