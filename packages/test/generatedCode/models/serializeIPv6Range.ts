import {IPv6Range} from './index';
import {serializeIpRange} from './serializeIpRange';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIPv6Range(writer: SerializationWriter, iPv6Range: IPv6Range | undefined = {}) : void {
        serializeIpRange(writer, iPv6Range)
            writer.writeStringValue("lowerAddress", iPv6Range.lowerAddress);
            writer.writeStringValue("upperAddress", iPv6Range.upperAddress);
}
