import {ProxiedDomain} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeProxiedDomain(writer: SerializationWriter, proxiedDomain: ProxiedDomain | undefined = {}) : void {
            writer.writeStringValue("ipAddressOrFQDN", proxiedDomain.ipAddressOrFQDN);
            writer.writeStringValue("@odata.type", proxiedDomain.odataType);
            writer.writeStringValue("proxy", proxiedDomain.proxy);
}
