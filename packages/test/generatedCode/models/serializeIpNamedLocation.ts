import {IpNamedLocation} from './index';
import {serializeIpRange} from './serializeIpRange';
import {serializeNamedLocation} from './serializeNamedLocation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIpNamedLocation(writer: SerializationWriter, ipNamedLocation: IpNamedLocation | undefined = {}) : void {
        serializeNamedLocation(writer, ipNamedLocation)
            writer.writeCollectionOfObjectValuesFromMethod("ipRanges", ipNamedLocation.ipRanges as any, serializeIpRange);
            writer.writeBooleanValue("isTrusted", ipNamedLocation.isTrusted);
}
