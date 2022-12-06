import {AuthenticationMethodState} from './authenticationMethodState';
import {AuthenticationMethodConfiguration} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthenticationMethodConfiguration(writer: SerializationWriter, authenticationMethodConfiguration: AuthenticationMethodConfiguration | undefined = {}) : void {
        serializeEntity(writer, authenticationMethodConfiguration)
            writer.writeEnumValue<AuthenticationMethodState>("state", authenticationMethodConfiguration.state);
}
