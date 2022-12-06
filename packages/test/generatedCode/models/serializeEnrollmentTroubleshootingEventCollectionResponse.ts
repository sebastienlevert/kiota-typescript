import {EnrollmentTroubleshootingEventCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEnrollmentTroubleshootingEvent} from './serializeEnrollmentTroubleshootingEvent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEnrollmentTroubleshootingEventCollectionResponse(writer: SerializationWriter, enrollmentTroubleshootingEventCollectionResponse: EnrollmentTroubleshootingEventCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, enrollmentTroubleshootingEventCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", enrollmentTroubleshootingEventCollectionResponse.value as any, serializeEnrollmentTroubleshootingEvent);
}
