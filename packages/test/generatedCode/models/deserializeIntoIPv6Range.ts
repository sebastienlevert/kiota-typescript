import {deserializeIntoIpRange} from './deserializeIntoIpRange';
import {IPv6Range} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIPv6Range(iPv6Range: IPv6Range | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIpRange(iPv6Range),
        "lowerAddress": n => { iPv6Range.lowerAddress = n.getStringValue() as any ; },
        "upperAddress": n => { iPv6Range.upperAddress = n.getStringValue() as any ; },
    }
}
