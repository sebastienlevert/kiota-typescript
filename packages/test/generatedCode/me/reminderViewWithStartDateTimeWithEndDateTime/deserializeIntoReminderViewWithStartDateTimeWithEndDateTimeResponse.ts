import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoReminder} from '../../models/deserializeIntoReminder';
import {ReminderViewWithStartDateTimeWithEndDateTimeResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoReminderViewWithStartDateTimeWithEndDateTimeResponse(reminderViewWithStartDateTimeWithEndDateTimeResponse: ReminderViewWithStartDateTimeWithEndDateTimeResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(reminderViewWithStartDateTimeWithEndDateTimeResponse),
        "value": n => { reminderViewWithStartDateTimeWithEndDateTimeResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoReminder) as any ; },
    }
}
