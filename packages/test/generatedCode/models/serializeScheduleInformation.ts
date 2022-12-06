import {ScheduleInformation} from './index';
import {serializeFreeBusyError} from './serializeFreeBusyError';
import {serializeScheduleItem} from './serializeScheduleItem';
import {serializeWorkingHours} from './serializeWorkingHours';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeScheduleInformation(writer: SerializationWriter, scheduleInformation: ScheduleInformation | undefined = {}) : void {
            writer.writeStringValue("availabilityView", scheduleInformation.availabilityView);
            writer.writeObjectValueFromMethod("error_escaped", scheduleInformation.error_escaped as any, serializeFreeBusyError);
            writer.writeStringValue("@odata.type", scheduleInformation.odataType);
            writer.writeStringValue("scheduleId", scheduleInformation.scheduleId);
            writer.writeCollectionOfObjectValuesFromMethod("scheduleItems", scheduleInformation.scheduleItems as any, serializeScheduleItem);
            writer.writeObjectValueFromMethod("workingHours", scheduleInformation.workingHours as any, serializeWorkingHours);
}
