import {deserializeIntoIpRange} from './deserializeIntoIpRange';
import {IPv4Range} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIPv4Range(iPv4Range: IPv4Range | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIpRange(iPv4Range),
        "lowerAddress": n => { iPv4Range.lowerAddress = n.getStringValue() as any ; },
        "upperAddress": n => { iPv4Range.upperAddress = n.getStringValue() as any ; },
    }
}
