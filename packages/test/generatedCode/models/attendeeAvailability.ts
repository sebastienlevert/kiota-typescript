import {FreeBusyStatus} from './freeBusyStatus';
import {AttendeeBase} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AttendeeAvailability extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The email address and type of attendee - whether it's a person or a resource, and whether required or optional if it's a person. */
    attendee?: AttendeeBase;
    /** The availability status of the attendee. The possible values are: free, tentative, busy, oof, workingElsewhere, unknown. */
    availability?: FreeBusyStatus;
    /** The OdataType property */
    odataType?: string;
}
