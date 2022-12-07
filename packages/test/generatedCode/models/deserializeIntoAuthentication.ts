import {deserializeIntoAuthenticationMethod} from './deserializeIntoAuthenticationMethod';
import {deserializeIntoEmailAuthenticationMethod} from './deserializeIntoEmailAuthenticationMethod';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoFido2AuthenticationMethod} from './deserializeIntoFido2AuthenticationMethod';
import {deserializeIntoLongRunningOperation} from './deserializeIntoLongRunningOperation';
import {deserializeIntoMicrosoftAuthenticatorAuthenticationMethod} from './deserializeIntoMicrosoftAuthenticatorAuthenticationMethod';
import {deserializeIntoPasswordAuthenticationMethod} from './deserializeIntoPasswordAuthenticationMethod';
import {deserializeIntoPasswordlessMicrosoftAuthenticatorAuthenticationMethod} from './deserializeIntoPasswordlessMicrosoftAuthenticatorAuthenticationMethod';
import {deserializeIntoPhoneAuthenticationMethod} from './deserializeIntoPhoneAuthenticationMethod';
import {deserializeIntoSoftwareOathAuthenticationMethod} from './deserializeIntoSoftwareOathAuthenticationMethod';
import {deserializeIntoTemporaryAccessPassAuthenticationMethod} from './deserializeIntoTemporaryAccessPassAuthenticationMethod';
import {deserializeIntoWindowsHelloForBusinessAuthenticationMethod} from './deserializeIntoWindowsHelloForBusinessAuthenticationMethod';
import {Authentication} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthentication(authentication: Authentication | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(authentication),
        "emailMethods": n => { authentication.emailMethods = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEmailAuthenticationMethod) as any ; },
        "fido2Methods": n => { authentication.fido2Methods = n.getCollectionOfObjectValuesFromMethod(deserializeIntoFido2AuthenticationMethod) as any ; },
        "methods": n => { authentication.methods = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAuthenticationMethod) as any ; },
        "microsoftAuthenticatorMethods": n => { authentication.microsoftAuthenticatorMethods = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMicrosoftAuthenticatorAuthenticationMethod) as any ; },
        "operations": n => { authentication.operations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoLongRunningOperation) as any ; },
        "passwordlessMicrosoftAuthenticatorMethods": n => { authentication.passwordlessMicrosoftAuthenticatorMethods = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPasswordlessMicrosoftAuthenticatorAuthenticationMethod) as any ; },
        "passwordMethods": n => { authentication.passwordMethods = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPasswordAuthenticationMethod) as any ; },
        "phoneMethods": n => { authentication.phoneMethods = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPhoneAuthenticationMethod) as any ; },
        "softwareOathMethods": n => { authentication.softwareOathMethods = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSoftwareOathAuthenticationMethod) as any ; },
        "temporaryAccessPassMethods": n => { authentication.temporaryAccessPassMethods = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTemporaryAccessPassAuthenticationMethod) as any ; },
        "windowsHelloForBusinessMethods": n => { authentication.windowsHelloForBusinessMethods = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindowsHelloForBusinessAuthenticationMethod) as any ; },
    }
}
