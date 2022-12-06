import {FreeBusyStatus} from './freeBusyStatus';
import {DateTimeTimeZone} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ScheduleItem extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The date, time, and time zone that the corresponding event ends. */
    end?: DateTimeTimeZone;
    /** The sensitivity of the corresponding event. True if the event is marked private, false otherwise. Optional. */
    isPrivate?: boolean;
    /** The location where the corresponding event is held or attended from. Optional. */
    location?: string;
    /** The OdataType property */
    odataType?: string;
    /** The date, time, and time zone that the corresponding event starts. */
    start?: DateTimeTimeZone;
    /** The availability status of the user or resource during the corresponding event. The possible values are: free, tentative, busy, oof, workingElsewhere, unknown. */
    status?: FreeBusyStatus;
    /** The corresponding event's subject line. Optional. */
    subject?: string;
}
