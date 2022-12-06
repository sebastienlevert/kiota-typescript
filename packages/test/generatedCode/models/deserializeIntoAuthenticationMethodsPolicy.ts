import {deserializeIntoAuthenticationMethodConfiguration} from './deserializeIntoAuthenticationMethodConfiguration';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoRegistrationEnforcement} from './deserializeIntoRegistrationEnforcement';
import {AuthenticationMethodsPolicy} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthenticationMethodsPolicy(authenticationMethodsPolicy: AuthenticationMethodsPolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(authenticationMethodsPolicy),
        "authenticationMethodConfigurations": n => { authenticationMethodsPolicy.authenticationMethodConfigurations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAuthenticationMethodConfiguration) as any ; },
        "description": n => { authenticationMethodsPolicy.description = n.getStringValue() as any ; },
        "displayName": n => { authenticationMethodsPolicy.displayName = n.getStringValue() as any ; },
        "lastModifiedDateTime": n => { authenticationMethodsPolicy.lastModifiedDateTime = n.getDateValue() as any ; },
        "policyVersion": n => { authenticationMethodsPolicy.policyVersion = n.getStringValue() as any ; },
        "reconfirmationInDays": n => { authenticationMethodsPolicy.reconfirmationInDays = n.getNumberValue() as any ; },
        "registrationEnforcement": n => { authenticationMethodsPolicy.registrationEnforcement = n.getObject(deserializeIntoRegistrationEnforcement) as any ; },
    }
}
