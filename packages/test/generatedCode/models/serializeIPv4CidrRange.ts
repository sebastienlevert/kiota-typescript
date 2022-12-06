import {IPv4CidrRange} from './index';
import {serializeIpRange} from './serializeIpRange';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIPv4CidrRange(writer: SerializationWriter, iPv4CidrRange: IPv4CidrRange | undefined = {}) : void {
        serializeIpRange(writer, iPv4CidrRange)
            writer.writeStringValue("cidrAddress", iPv4CidrRange.cidrAddress);
}
