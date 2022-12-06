import {DayOfWeek} from './dayOfWeek';
import {BookingWorkTimeSlot} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface BookingWorkHours extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The day property */
    day?: DayOfWeek;
    /** The OdataType property */
    odataType?: string;
    /** A list of start/end times during a day. */
    timeSlots?: BookingWorkTimeSlot[];
}
