import {IpRange} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIpRange(writer: SerializationWriter, ipRange: IpRange | undefined = {}) : void {
            writer.writeStringValue("@odata.type", ipRange.odataType);
}
