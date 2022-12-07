import {RegionalFormatOverrides} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRegionalFormatOverrides(regionalFormatOverrides: RegionalFormatOverrides | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "calendar": n => { regionalFormatOverrides.calendar = n.getStringValue() as any ; },
        "firstDayOfWeek": n => { regionalFormatOverrides.firstDayOfWeek = n.getStringValue() as any ; },
        "longDateFormat": n => { regionalFormatOverrides.longDateFormat = n.getStringValue() as any ; },
        "longTimeFormat": n => { regionalFormatOverrides.longTimeFormat = n.getStringValue() as any ; },
        "shortDateFormat": n => { regionalFormatOverrides.shortDateFormat = n.getStringValue() as any ; },
        "shortTimeFormat": n => { regionalFormatOverrides.shortTimeFormat = n.getStringValue() as any ; },
        "timeZone": n => { regionalFormatOverrides.timeZone = n.getStringValue() as any ; },
    }
}
