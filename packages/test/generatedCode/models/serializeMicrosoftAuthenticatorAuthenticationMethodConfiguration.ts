import {MicrosoftAuthenticatorAuthenticationMethodConfiguration} from './index';
import {serializeAuthenticationMethodConfiguration} from './serializeAuthenticationMethodConfiguration';
import {serializeMicrosoftAuthenticatorAuthenticationMethodTarget} from './serializeMicrosoftAuthenticatorAuthenticationMethodTarget';
import {serializeMicrosoftAuthenticatorFeatureSettings} from './serializeMicrosoftAuthenticatorFeatureSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMicrosoftAuthenticatorAuthenticationMethodConfiguration(writer: SerializationWriter, microsoftAuthenticatorAuthenticationMethodConfiguration: MicrosoftAuthenticatorAuthenticationMethodConfiguration | undefined = {}) : void {
        serializeAuthenticationMethodConfiguration(writer, microsoftAuthenticatorAuthenticationMethodConfiguration)
            writer.writeObjectValueFromMethod("featureSettings", microsoftAuthenticatorAuthenticationMethodConfiguration.featureSettings as any, serializeMicrosoftAuthenticatorFeatureSettings);
            writer.writeCollectionOfObjectValuesFromMethod("includeTargets", microsoftAuthenticatorAuthenticationMethodConfiguration.includeTargets as any, serializeMicrosoftAuthenticatorAuthenticationMethodTarget);
}
