import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoOfferShiftRequest} from './deserializeIntoOfferShiftRequest';
import {deserializeIntoOpenShift} from './deserializeIntoOpenShift';
import {deserializeIntoOpenShiftChangeRequest} from './deserializeIntoOpenShiftChangeRequest';
import {deserializeIntoSchedulingGroup} from './deserializeIntoSchedulingGroup';
import {deserializeIntoShift} from './deserializeIntoShift';
import {deserializeIntoSwapShiftsChangeRequest} from './deserializeIntoSwapShiftsChangeRequest';
import {deserializeIntoTimeCard} from './deserializeIntoTimeCard';
import {deserializeIntoTimeClockSettings} from './deserializeIntoTimeClockSettings';
import {deserializeIntoTimeOff} from './deserializeIntoTimeOff';
import {deserializeIntoTimeOffReason} from './deserializeIntoTimeOffReason';
import {deserializeIntoTimeOffRequest} from './deserializeIntoTimeOffRequest';
import {Schedule} from './index';
import {OperationStatus} from './operationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSchedule(schedule: Schedule | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(schedule),
        "enabled": n => { schedule.enabled = n.getBooleanValue() as any ; },
        "offerShiftRequests": n => { schedule.offerShiftRequests = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOfferShiftRequest) as any ; },
        "offerShiftRequestsEnabled": n => { schedule.offerShiftRequestsEnabled = n.getBooleanValue() as any ; },
        "openShiftChangeRequests": n => { schedule.openShiftChangeRequests = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOpenShiftChangeRequest) as any ; },
        "openShifts": n => { schedule.openShifts = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOpenShift) as any ; },
        "openShiftsEnabled": n => { schedule.openShiftsEnabled = n.getBooleanValue() as any ; },
        "provisionStatus": n => { schedule.provisionStatus = n.getEnumValue<OperationStatus>(OperationStatus) as any ; },
        "provisionStatusCode": n => { schedule.provisionStatusCode = n.getStringValue() as any ; },
        "schedulingGroups": n => { schedule.schedulingGroups = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSchedulingGroup) as any ; },
        "shifts": n => { schedule.shifts = n.getCollectionOfObjectValuesFromMethod(deserializeIntoShift) as any ; },
        "swapShiftsChangeRequests": n => { schedule.swapShiftsChangeRequests = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSwapShiftsChangeRequest) as any ; },
        "swapShiftsRequestsEnabled": n => { schedule.swapShiftsRequestsEnabled = n.getBooleanValue() as any ; },
        "timeCards": n => { schedule.timeCards = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTimeCard) as any ; },
        "timeClockEnabled": n => { schedule.timeClockEnabled = n.getBooleanValue() as any ; },
        "timeClockSettings": n => { schedule.timeClockSettings = n.getObject(deserializeIntoTimeClockSettings) as any ; },
        "timeOffReasons": n => { schedule.timeOffReasons = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTimeOffReason) as any ; },
        "timeOffRequests": n => { schedule.timeOffRequests = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTimeOffRequest) as any ; },
        "timeOffRequestsEnabled": n => { schedule.timeOffRequestsEnabled = n.getBooleanValue() as any ; },
        "timesOff": n => { schedule.timesOff = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTimeOff) as any ; },
        "timeZone": n => { schedule.timeZone = n.getStringValue() as any ; },
        "workforceIntegrationIds": n => { schedule.workforceIntegrationIds = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
