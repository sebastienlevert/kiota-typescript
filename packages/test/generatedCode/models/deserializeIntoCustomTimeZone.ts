import {deserializeIntoDaylightTimeZoneOffset} from './deserializeIntoDaylightTimeZoneOffset';
import {deserializeIntoStandardTimeZoneOffset} from './deserializeIntoStandardTimeZoneOffset';
import {deserializeIntoTimeZoneBase} from './deserializeIntoTimeZoneBase';
import {CustomTimeZone} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCustomTimeZone(customTimeZone: CustomTimeZone | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoTimeZoneBase(customTimeZone),
        "bias": n => { customTimeZone.bias = n.getNumberValue() as any ; },
        "daylightOffset": n => { customTimeZone.daylightOffset = n.getObject(deserializeIntoDaylightTimeZoneOffset) as any ; },
        "standardOffset": n => { customTimeZone.standardOffset = n.getObject(deserializeIntoStandardTimeZoneOffset) as any ; },
    }
}
