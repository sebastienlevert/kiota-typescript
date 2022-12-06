import {IPv4Range} from './index';
import {serializeIpRange} from './serializeIpRange';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIPv4Range(writer: SerializationWriter, iPv4Range: IPv4Range | undefined = {}) : void {
        serializeIpRange(writer, iPv4Range)
            writer.writeStringValue("lowerAddress", iPv4Range.lowerAddress);
            writer.writeStringValue("upperAddress", iPv4Range.upperAddress);
}
