import {DayOfWeek} from './dayOfWeek';
import {TimeZoneBase} from './index';
import {AdditionalDataHolder, Parsable, TimeOnly} from '@microsoft/kiota-abstractions';

export interface WorkingHours extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The days of the week on which the user works. */
    daysOfWeek?: DayOfWeek[];
    /** The time of the day that the user stops working. */
    endTime?: TimeOnly;
    /** The OdataType property */
    odataType?: string;
    /** The time of the day that the user starts working. */
    startTime?: TimeOnly;
    /** The time zone to which the working hours apply. */
    timeZone?: TimeZoneBase;
}
