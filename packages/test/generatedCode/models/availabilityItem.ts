import {BookingsAvailabilityStatus} from './bookingsAvailabilityStatus';
import {DateTimeTimeZone} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AvailabilityItem extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The endDateTime property */
    endDateTime?: DateTimeTimeZone;
    /** The OdataType property */
    odataType?: string;
    /** Indicates the service ID in case of 1:n appointments. If the appointment is of type 1:n, this field will be present, otherwise, null. */
    serviceId?: string;
    /** The startDateTime property */
    startDateTime?: DateTimeTimeZone;
    /** The status of the staff member. Possible values are: available, busy, slotsAvailable, outOfOffice, unknownFutureValue. */
    status?: BookingsAvailabilityStatus;
}
