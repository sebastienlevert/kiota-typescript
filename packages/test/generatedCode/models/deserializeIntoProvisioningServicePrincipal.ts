import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import {ProvisioningServicePrincipal} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProvisioningServicePrincipal(provisioningServicePrincipal: ProvisioningServicePrincipal | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentity(provisioningServicePrincipal),
    }
}
