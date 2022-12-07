import {deserializeIntoItemFacet} from './deserializeIntoItemFacet';
import {PersonAnnualEvent} from './index';
import {PersonAnnualEventType} from './personAnnualEventType';
import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPersonAnnualEvent(personAnnualEvent: PersonAnnualEvent | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoItemFacet(personAnnualEvent),
        "date": n => { personAnnualEvent.date = n.getDateOnlyValue() as any ; },
        "displayName": n => { personAnnualEvent.displayName = n.getStringValue() as any ; },
        "type": n => { personAnnualEvent.type = n.getEnumValue<PersonAnnualEventType>(PersonAnnualEventType) as any ; },
    }
}
