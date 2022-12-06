import {BasicAuthentication} from './index';
import {serializeApiAuthenticationConfigurationBase} from './serializeApiAuthenticationConfigurationBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBasicAuthentication(writer: SerializationWriter, basicAuthentication: BasicAuthentication | undefined = {}) : void {
        serializeApiAuthenticationConfigurationBase(writer, basicAuthentication)
            writer.writeStringValue("password", basicAuthentication.password);
            writer.writeStringValue("username", basicAuthentication.username);
}
