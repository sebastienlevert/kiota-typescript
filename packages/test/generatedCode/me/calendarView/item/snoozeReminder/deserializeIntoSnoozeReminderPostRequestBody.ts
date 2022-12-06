import {deserializeIntoDateTimeTimeZone} from '../../../../models/deserializeIntoDateTimeTimeZone';
import {SnoozeReminderPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSnoozeReminderPostRequestBody(snoozeReminderPostRequestBody: SnoozeReminderPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "newReminderTime": n => { snoozeReminderPostRequestBody.newReminderTime = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
    }
}
