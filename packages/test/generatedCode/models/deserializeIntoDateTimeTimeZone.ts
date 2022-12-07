import {DateTimeTimeZone} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDateTimeTimeZone(dateTimeTimeZone: DateTimeTimeZone | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "dateTime": n => { dateTimeTimeZone.dateTime = n.getStringValue() as any ; },
        "timeZone": n => { dateTimeTimeZone.timeZone = n.getStringValue() as any ; },
    }
}
