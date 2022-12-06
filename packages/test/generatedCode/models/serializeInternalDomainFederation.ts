import {FederatedIdpMfaBehavior} from './federatedIdpMfaBehavior';
import {InternalDomainFederation} from './index';
import {PromptLoginBehavior} from './promptLoginBehavior';
import {serializeSamlOrWsFedProvider} from './serializeSamlOrWsFedProvider';
import {serializeSigningCertificateUpdateStatus} from './serializeSigningCertificateUpdateStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInternalDomainFederation(writer: SerializationWriter, internalDomainFederation: InternalDomainFederation | undefined = {}) : void {
        serializeSamlOrWsFedProvider(writer, internalDomainFederation)
            writer.writeStringValue("activeSignInUri", internalDomainFederation.activeSignInUri);
            writer.writeEnumValue<FederatedIdpMfaBehavior>("federatedIdpMfaBehavior", internalDomainFederation.federatedIdpMfaBehavior);
            writer.writeBooleanValue("isSignedAuthenticationRequestRequired", internalDomainFederation.isSignedAuthenticationRequestRequired);
            writer.writeStringValue("nextSigningCertificate", internalDomainFederation.nextSigningCertificate);
            writer.writeEnumValue<PromptLoginBehavior>("promptLoginBehavior", internalDomainFederation.promptLoginBehavior);
            writer.writeObjectValueFromMethod("signingCertificateUpdateStatus", internalDomainFederation.signingCertificateUpdateStatus as any, serializeSigningCertificateUpdateStatus);
            writer.writeStringValue("signOutUri", internalDomainFederation.signOutUri);
}
