import {PasswordlessMicrosoftAuthenticatorAuthenticationMethod} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPasswordlessMicrosoftAuthenticatorAuthenticationMethodFromDiscriminatorValue(parseNode: ParseNode | undefined) : PasswordlessMicrosoftAuthenticatorAuthenticationMethod {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PasswordlessMicrosoftAuthenticatorAuthenticationMethod();
}
