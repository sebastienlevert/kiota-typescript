import {IdentityApiConnector} from './index';
import {serializeApiAuthenticationConfigurationBase} from './serializeApiAuthenticationConfigurationBase';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityApiConnector(writer: SerializationWriter, identityApiConnector: IdentityApiConnector | undefined = {}) : void {
        serializeEntity(writer, identityApiConnector)
            writer.writeObjectValueFromMethod("authenticationConfiguration", identityApiConnector.authenticationConfiguration as any, serializeApiAuthenticationConfigurationBase);
            writer.writeStringValue("displayName", identityApiConnector.displayName);
            writer.writeStringValue("targetUrl", identityApiConnector.targetUrl);
}
