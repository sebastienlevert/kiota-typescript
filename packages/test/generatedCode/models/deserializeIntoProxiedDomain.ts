import {ProxiedDomain} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProxiedDomain(proxiedDomain: ProxiedDomain | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "ipAddressOrFQDN": n => { proxiedDomain.ipAddressOrFQDN = n.getStringValue() as any ; },
        "@odata.type": n => { proxiedDomain.odataType = n.getStringValue() as any ; },
        "proxy": n => { proxiedDomain.proxy = n.getStringValue() as any ; },
    }
}
