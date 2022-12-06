import {FreeBusyError, ScheduleItem, WorkingHours} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ScheduleInformation extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Represents a merged view of availability of all the items in scheduleItems. The view consists of time slots. Availability during each time slot is indicated with: 0= free, 1= tentative, 2= busy, 3= out of office, 4= working elsewhere. */
    availabilityView?: string;
    /** Error information from attempting to get the availability of the user, distribution list, or resource. */
    error_escaped?: FreeBusyError;
    /** The OdataType property */
    odataType?: string;
    /** An SMTP address of the user, distribution list, or resource, identifying an instance of scheduleInformation. */
    scheduleId?: string;
    /** Contains the items that describe the availability of the user or resource. */
    scheduleItems?: ScheduleItem[];
    /** The days of the week and hours in a specific time zone that the user works. These are set as part of the user's mailboxSettings. */
    workingHours?: WorkingHours;
}
