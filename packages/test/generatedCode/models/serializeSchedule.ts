import {Schedule} from './index';
import {OperationStatus} from './operationStatus';
import {serializeEntity} from './serializeEntity';
import {serializeOfferShiftRequest} from './serializeOfferShiftRequest';
import {serializeOpenShift} from './serializeOpenShift';
import {serializeOpenShiftChangeRequest} from './serializeOpenShiftChangeRequest';
import {serializeSchedulingGroup} from './serializeSchedulingGroup';
import {serializeShift} from './serializeShift';
import {serializeSwapShiftsChangeRequest} from './serializeSwapShiftsChangeRequest';
import {serializeTimeCard} from './serializeTimeCard';
import {serializeTimeClockSettings} from './serializeTimeClockSettings';
import {serializeTimeOff} from './serializeTimeOff';
import {serializeTimeOffReason} from './serializeTimeOffReason';
import {serializeTimeOffRequest} from './serializeTimeOffRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSchedule(writer: SerializationWriter, schedule: Schedule | undefined = {}) : void {
        serializeEntity(writer, schedule)
            writer.writeBooleanValue("enabled", schedule.enabled);
            writer.writeCollectionOfObjectValuesFromMethod("offerShiftRequests", schedule.offerShiftRequests as any, serializeOfferShiftRequest);
            writer.writeBooleanValue("offerShiftRequestsEnabled", schedule.offerShiftRequestsEnabled);
            writer.writeCollectionOfObjectValuesFromMethod("openShiftChangeRequests", schedule.openShiftChangeRequests as any, serializeOpenShiftChangeRequest);
            writer.writeCollectionOfObjectValuesFromMethod("openShifts", schedule.openShifts as any, serializeOpenShift);
            writer.writeBooleanValue("openShiftsEnabled", schedule.openShiftsEnabled);
            writer.writeEnumValue<OperationStatus>("provisionStatus", schedule.provisionStatus);
            writer.writeStringValue("provisionStatusCode", schedule.provisionStatusCode);
            writer.writeCollectionOfObjectValuesFromMethod("schedulingGroups", schedule.schedulingGroups as any, serializeSchedulingGroup);
            writer.writeCollectionOfObjectValuesFromMethod("shifts", schedule.shifts as any, serializeShift);
            writer.writeCollectionOfObjectValuesFromMethod("swapShiftsChangeRequests", schedule.swapShiftsChangeRequests as any, serializeSwapShiftsChangeRequest);
            writer.writeBooleanValue("swapShiftsRequestsEnabled", schedule.swapShiftsRequestsEnabled);
            writer.writeCollectionOfObjectValuesFromMethod("timeCards", schedule.timeCards as any, serializeTimeCard);
            writer.writeBooleanValue("timeClockEnabled", schedule.timeClockEnabled);
            writer.writeObjectValueFromMethod("timeClockSettings", schedule.timeClockSettings as any, serializeTimeClockSettings);
            writer.writeCollectionOfObjectValuesFromMethod("timeOffReasons", schedule.timeOffReasons as any, serializeTimeOffReason);
            writer.writeCollectionOfObjectValuesFromMethod("timeOffRequests", schedule.timeOffRequests as any, serializeTimeOffRequest);
            writer.writeBooleanValue("timeOffRequestsEnabled", schedule.timeOffRequestsEnabled);
            writer.writeCollectionOfObjectValuesFromMethod("timesOff", schedule.timesOff as any, serializeTimeOff);
            writer.writeStringValue("timeZone", schedule.timeZone);
            writer.writeCollectionOfPrimitiveValues<string>("workforceIntegrationIds", schedule.workforceIntegrationIds);
}
