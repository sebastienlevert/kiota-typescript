import {ProvisioningServicePrincipal} from './index';
import {serializeIdentity} from './serializeIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeProvisioningServicePrincipal(writer: SerializationWriter, provisioningServicePrincipal: ProvisioningServicePrincipal | undefined = {}) : void {
        serializeIdentity(writer, provisioningServicePrincipal)
}
