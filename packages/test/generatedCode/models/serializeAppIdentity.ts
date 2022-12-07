import {AppIdentity} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppIdentity(writer: SerializationWriter, appIdentity: AppIdentity | undefined = {}) : void {
            writer.writeStringValue("appId", appIdentity.appId);
            writer.writeStringValue("displayName", appIdentity.displayName);
            writer.writeStringValue("servicePrincipalId", appIdentity.servicePrincipalId);
            writer.writeStringValue("servicePrincipalName", appIdentity.servicePrincipalName);
}
