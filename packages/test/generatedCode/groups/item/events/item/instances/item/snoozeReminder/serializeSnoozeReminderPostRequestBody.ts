import {serializeDateTimeTimeZone} from '../../../../../../../models/serializeDateTimeTimeZone';
import {SnoozeReminderPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSnoozeReminderPostRequestBody(writer: SerializationWriter, snoozeReminderPostRequestBody: SnoozeReminderPostRequestBody | undefined = {}) : void {
            writer.writeObjectValueFromMethod("newReminderTime", snoozeReminderPostRequestBody.newReminderTime as any, serializeDateTimeTimeZone);
}
