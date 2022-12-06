import {Fido2AuthenticationMethodConfiguration} from './index';
import {serializeAuthenticationMethodConfiguration} from './serializeAuthenticationMethodConfiguration';
import {serializeAuthenticationMethodTarget} from './serializeAuthenticationMethodTarget';
import {serializeFido2KeyRestrictions} from './serializeFido2KeyRestrictions';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFido2AuthenticationMethodConfiguration(writer: SerializationWriter, fido2AuthenticationMethodConfiguration: Fido2AuthenticationMethodConfiguration | undefined = {}) : void {
        serializeAuthenticationMethodConfiguration(writer, fido2AuthenticationMethodConfiguration)
            writer.writeCollectionOfObjectValuesFromMethod("includeTargets", fido2AuthenticationMethodConfiguration.includeTargets as any, serializeAuthenticationMethodTarget);
            writer.writeBooleanValue("isAttestationEnforced", fido2AuthenticationMethodConfiguration.isAttestationEnforced);
            writer.writeBooleanValue("isSelfServiceRegistrationAllowed", fido2AuthenticationMethodConfiguration.isSelfServiceRegistrationAllowed);
            writer.writeObjectValueFromMethod("keyRestrictions", fido2AuthenticationMethodConfiguration.keyRestrictions as any, serializeFido2KeyRestrictions);
}
