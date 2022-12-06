import {deserializeIntoAuthenticationMethodConfiguration} from './deserializeIntoAuthenticationMethodConfiguration';
import {deserializeIntoMicrosoftAuthenticatorAuthenticationMethodTarget} from './deserializeIntoMicrosoftAuthenticatorAuthenticationMethodTarget';
import {deserializeIntoMicrosoftAuthenticatorFeatureSettings} from './deserializeIntoMicrosoftAuthenticatorFeatureSettings';
import {MicrosoftAuthenticatorAuthenticationMethodConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMicrosoftAuthenticatorAuthenticationMethodConfiguration(microsoftAuthenticatorAuthenticationMethodConfiguration: MicrosoftAuthenticatorAuthenticationMethodConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAuthenticationMethodConfiguration(microsoftAuthenticatorAuthenticationMethodConfiguration),
        "featureSettings": n => { microsoftAuthenticatorAuthenticationMethodConfiguration.featureSettings = n.getObject(deserializeIntoMicrosoftAuthenticatorFeatureSettings) as any ; },
        "includeTargets": n => { microsoftAuthenticatorAuthenticationMethodConfiguration.includeTargets = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMicrosoftAuthenticatorAuthenticationMethodTarget) as any ; },
    }
}
