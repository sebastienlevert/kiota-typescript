import {deserializeIntoExpirationPattern} from './deserializeIntoExpirationPattern';
import {deserializeIntoPatternedRecurrence} from './deserializeIntoPatternedRecurrence';
import {RequestSchedule} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRequestSchedule(requestSchedule: RequestSchedule | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "expiration": n => { requestSchedule.expiration = n.getObject(deserializeIntoExpirationPattern) as any ; },
        "@odata.type": n => { requestSchedule.odataType = n.getStringValue() as any ; },
        "recurrence": n => { requestSchedule.recurrence = n.getObject(deserializeIntoPatternedRecurrence) as any ; },
        "startDateTime": n => { requestSchedule.startDateTime = n.getDateValue() as any ; },
    }
}
