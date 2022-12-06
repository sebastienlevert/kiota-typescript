import {AuthenticationMethodState} from './authenticationMethodState';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {AuthenticationMethodConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthenticationMethodConfiguration(authenticationMethodConfiguration: AuthenticationMethodConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(authenticationMethodConfiguration),
        "state": n => { authenticationMethodConfiguration.state = n.getEnumValue<AuthenticationMethodState>(AuthenticationMethodState) as any ; },
    }
}
