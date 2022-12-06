import {AuthenticationMethodsPolicy} from './index';
import {serializeAuthenticationMethodConfiguration} from './serializeAuthenticationMethodConfiguration';
import {serializeEntity} from './serializeEntity';
import {serializeRegistrationEnforcement} from './serializeRegistrationEnforcement';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthenticationMethodsPolicy(writer: SerializationWriter, authenticationMethodsPolicy: AuthenticationMethodsPolicy | undefined = {}) : void {
        serializeEntity(writer, authenticationMethodsPolicy)
            writer.writeCollectionOfObjectValuesFromMethod("authenticationMethodConfigurations", authenticationMethodsPolicy.authenticationMethodConfigurations as any, serializeAuthenticationMethodConfiguration);
            writer.writeStringValue("description", authenticationMethodsPolicy.description);
            writer.writeStringValue("displayName", authenticationMethodsPolicy.displayName);
            writer.writeDateValue("lastModifiedDateTime", authenticationMethodsPolicy.lastModifiedDateTime);
            writer.writeStringValue("policyVersion", authenticationMethodsPolicy.policyVersion);
            writer.writeNumberValue("reconfirmationInDays", authenticationMethodsPolicy.reconfirmationInDays);
            writer.writeObjectValueFromMethod("registrationEnforcement", authenticationMethodsPolicy.registrationEnforcement as any, serializeRegistrationEnforcement);
}
