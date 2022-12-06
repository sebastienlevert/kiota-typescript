import {deserializeIntoSamlOrWsFedProvider} from './deserializeIntoSamlOrWsFedProvider';
import {deserializeIntoSigningCertificateUpdateStatus} from './deserializeIntoSigningCertificateUpdateStatus';
import {FederatedIdpMfaBehavior} from './federatedIdpMfaBehavior';
import {InternalDomainFederation} from './index';
import {PromptLoginBehavior} from './promptLoginBehavior';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInternalDomainFederation(internalDomainFederation: InternalDomainFederation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSamlOrWsFedProvider(internalDomainFederation),
        "activeSignInUri": n => { internalDomainFederation.activeSignInUri = n.getStringValue() as any ; },
        "federatedIdpMfaBehavior": n => { internalDomainFederation.federatedIdpMfaBehavior = n.getEnumValue<FederatedIdpMfaBehavior>(FederatedIdpMfaBehavior) as any ; },
        "isSignedAuthenticationRequestRequired": n => { internalDomainFederation.isSignedAuthenticationRequestRequired = n.getBooleanValue() as any ; },
        "nextSigningCertificate": n => { internalDomainFederation.nextSigningCertificate = n.getStringValue() as any ; },
        "promptLoginBehavior": n => { internalDomainFederation.promptLoginBehavior = n.getEnumValue<PromptLoginBehavior>(PromptLoginBehavior) as any ; },
        "signingCertificateUpdateStatus": n => { internalDomainFederation.signingCertificateUpdateStatus = n.getObject(deserializeIntoSigningCertificateUpdateStatus) as any ; },
        "signOutUri": n => { internalDomainFederation.signOutUri = n.getStringValue() as any ; },
    }
}
