import {IpRange} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIpRange(ipRange: IpRange | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { ipRange.odataType = n.getStringValue() as any ; },
    }
}
