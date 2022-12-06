import {ServicePrincipalIdentity} from './index';
import {serializeIdentity} from './serializeIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServicePrincipalIdentity(writer: SerializationWriter, servicePrincipalIdentity: ServicePrincipalIdentity | undefined = {}) : void {
        serializeIdentity(writer, servicePrincipalIdentity)
            writer.writeStringValue("appId", servicePrincipalIdentity.appId);
}
