import {deserializeIntoStandardTimeZoneOffset} from './deserializeIntoStandardTimeZoneOffset';
import {DaylightTimeZoneOffset} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDaylightTimeZoneOffset(daylightTimeZoneOffset: DaylightTimeZoneOffset | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoStandardTimeZoneOffset(daylightTimeZoneOffset),
        "daylightBias": n => { daylightTimeZoneOffset.daylightBias = n.getNumberValue() as any ; },
    }
}
