import {deserializeIntoIpRange} from './deserializeIntoIpRange';
import {IPv6CidrRange} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIPv6CidrRange(iPv6CidrRange: IPv6CidrRange | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIpRange(iPv6CidrRange),
        "cidrAddress": n => { iPv6CidrRange.cidrAddress = n.getStringValue() as any ; },
    }
}
