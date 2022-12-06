import {deserializeIntoAuthenticationMethodConfiguration} from './deserializeIntoAuthenticationMethodConfiguration';
import {deserializeIntoAuthenticationMethodTarget} from './deserializeIntoAuthenticationMethodTarget';
import {deserializeIntoFido2KeyRestrictions} from './deserializeIntoFido2KeyRestrictions';
import {Fido2AuthenticationMethodConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFido2AuthenticationMethodConfiguration(fido2AuthenticationMethodConfiguration: Fido2AuthenticationMethodConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAuthenticationMethodConfiguration(fido2AuthenticationMethodConfiguration),
        "includeTargets": n => { fido2AuthenticationMethodConfiguration.includeTargets = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAuthenticationMethodTarget) as any ; },
        "isAttestationEnforced": n => { fido2AuthenticationMethodConfiguration.isAttestationEnforced = n.getBooleanValue() as any ; },
        "isSelfServiceRegistrationAllowed": n => { fido2AuthenticationMethodConfiguration.isSelfServiceRegistrationAllowed = n.getBooleanValue() as any ; },
        "keyRestrictions": n => { fido2AuthenticationMethodConfiguration.keyRestrictions = n.getObject(deserializeIntoFido2KeyRestrictions) as any ; },
    }
}
