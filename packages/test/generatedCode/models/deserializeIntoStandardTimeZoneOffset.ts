import {DayOfWeek} from './dayOfWeek';
import {StandardTimeZoneOffset} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export function deserializeIntoStandardTimeZoneOffset(standardTimeZoneOffset: StandardTimeZoneOffset | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "dayOccurrence": n => { standardTimeZoneOffset.dayOccurrence = n.getNumberValue() as any ; },
        "dayOfWeek": n => { standardTimeZoneOffset.dayOfWeek = n.getEnumValue<DayOfWeek>(DayOfWeek) as any ; },
        "month": n => { standardTimeZoneOffset.month = n.getNumberValue() as any ; },
        "@odata.type": n => { standardTimeZoneOffset.odataType = n.getStringValue() as any ; },
        "time": n => { standardTimeZoneOffset.time = n.getTimeOnlyValue() as any ; },
        "year": n => { standardTimeZoneOffset.year = n.getNumberValue() as any ; },
    }
}
