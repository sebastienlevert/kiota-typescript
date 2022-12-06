import {deserializeIntoIpRange} from './deserializeIntoIpRange';
import {deserializeIntoNamedLocation} from './deserializeIntoNamedLocation';
import {IpNamedLocation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIpNamedLocation(ipNamedLocation: IpNamedLocation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoNamedLocation(ipNamedLocation),
        "ipRanges": n => { ipNamedLocation.ipRanges = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIpRange) as any ; },
        "isTrusted": n => { ipNamedLocation.isTrusted = n.getBooleanValue() as any ; },
    }
}
