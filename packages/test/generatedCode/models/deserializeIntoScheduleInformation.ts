import {deserializeIntoFreeBusyError} from './deserializeIntoFreeBusyError';
import {deserializeIntoScheduleItem} from './deserializeIntoScheduleItem';
import {deserializeIntoWorkingHours} from './deserializeIntoWorkingHours';
import {ScheduleInformation} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoScheduleInformation(scheduleInformation: ScheduleInformation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "availabilityView": n => { scheduleInformation.availabilityView = n.getStringValue() as any ; },
        "error": n => { scheduleInformation.error_escaped = n.getObject(deserializeIntoFreeBusyError) as any ; },
        "@odata.type": n => { scheduleInformation.odataType = n.getStringValue() as any ; },
        "scheduleId": n => { scheduleInformation.scheduleId = n.getStringValue() as any ; },
        "scheduleItems": n => { scheduleInformation.scheduleItems = n.getCollectionOfObjectValuesFromMethod(deserializeIntoScheduleItem) as any ; },
        "workingHours": n => { scheduleInformation.workingHours = n.getObject(deserializeIntoWorkingHours) as any ; },
    }
}
