import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeReminder} from '../../../models/serializeReminder';
import {ReminderViewWithStartDateTimeWithEndDateTimeResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeReminderViewWithStartDateTimeWithEndDateTimeResponse(writer: SerializationWriter, reminderViewWithStartDateTimeWithEndDateTimeResponse: ReminderViewWithStartDateTimeWithEndDateTimeResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, reminderViewWithStartDateTimeWithEndDateTimeResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", reminderViewWithStartDateTimeWithEndDateTimeResponse.value as any, serializeReminder);
}
