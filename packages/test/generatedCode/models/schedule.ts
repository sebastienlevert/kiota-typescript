import {Entity, OfferShiftRequest, OpenShift, OpenShiftChangeRequest, SchedulingGroup, Shift, SwapShiftsChangeRequest, TimeCard, TimeClockSettings, TimeOff, TimeOffReason, TimeOffRequest} from './index';
import {OperationStatus} from './operationStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Schedule extends Entity, Partial<Parsable> {
    /** Indicates whether the schedule is enabled for the team. Required. */
    enabled?: boolean;
    /** The offerShiftRequests property */
    offerShiftRequests?: OfferShiftRequest[];
    /** Indicates whether offer shift requests are enabled for the schedule. */
    offerShiftRequestsEnabled?: boolean;
    /** The openShiftChangeRequests property */
    openShiftChangeRequests?: OpenShiftChangeRequest[];
    /** The openShifts property */
    openShifts?: OpenShift[];
    /** Indicates whether open shifts are enabled for the schedule. */
    openShiftsEnabled?: boolean;
    /** The provisionStatus property */
    provisionStatus?: OperationStatus;
    /** Additional information about why schedule provisioning failed. */
    provisionStatusCode?: string;
    /** The logical grouping of users in the schedule (usually by role). */
    schedulingGroups?: SchedulingGroup[];
    /** The shifts in the schedule. */
    shifts?: Shift[];
    /** The swapShiftsChangeRequests property */
    swapShiftsChangeRequests?: SwapShiftsChangeRequest[];
    /** Indicates whether swap shifts requests are enabled for the schedule. */
    swapShiftsRequestsEnabled?: boolean;
    /** The timeCards property */
    timeCards?: TimeCard[];
    /** Indicates whether time clock is enabled for the schedule. */
    timeClockEnabled?: boolean;
    /** The timeClockSettings property */
    timeClockSettings?: TimeClockSettings;
    /** The set of reasons for a time off in the schedule. */
    timeOffReasons?: TimeOffReason[];
    /** The timeOffRequests property */
    timeOffRequests?: TimeOffRequest[];
    /** Indicates whether time off requests are enabled for the schedule. */
    timeOffRequestsEnabled?: boolean;
    /** The instances of times off in the schedule. */
    timesOff?: TimeOff[];
    /** Indicates the time zone of the schedule team using tz database format. Required. */
    timeZone?: string;
    /** The workforceIntegrationIds property */
    workforceIntegrationIds?: string[];
}
