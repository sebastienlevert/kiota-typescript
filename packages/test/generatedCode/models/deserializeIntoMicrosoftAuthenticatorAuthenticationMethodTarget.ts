import {deserializeIntoAuthenticationMethodTarget} from './deserializeIntoAuthenticationMethodTarget';
import {MicrosoftAuthenticatorAuthenticationMethodTarget} from './index';
import {MicrosoftAuthenticatorAuthenticationMode} from './microsoftAuthenticatorAuthenticationMode';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMicrosoftAuthenticatorAuthenticationMethodTarget(microsoftAuthenticatorAuthenticationMethodTarget: MicrosoftAuthenticatorAuthenticationMethodTarget | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAuthenticationMethodTarget(microsoftAuthenticatorAuthenticationMethodTarget),
        "authenticationMode": n => { microsoftAuthenticatorAuthenticationMethodTarget.authenticationMode = n.getEnumValue<MicrosoftAuthenticatorAuthenticationMode>(MicrosoftAuthenticatorAuthenticationMode) as any ; },
    }
}
