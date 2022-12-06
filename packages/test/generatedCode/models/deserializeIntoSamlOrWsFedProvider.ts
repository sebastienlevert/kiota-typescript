import {AuthenticationProtocol} from './authenticationProtocol';
import {deserializeIntoIdentityProviderBase} from './deserializeIntoIdentityProviderBase';
import {SamlOrWsFedProvider} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSamlOrWsFedProvider(samlOrWsFedProvider: SamlOrWsFedProvider | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentityProviderBase(samlOrWsFedProvider),
        "issuerUri": n => { samlOrWsFedProvider.issuerUri = n.getStringValue() as any ; },
        "metadataExchangeUri": n => { samlOrWsFedProvider.metadataExchangeUri = n.getStringValue() as any ; },
        "passiveSignInUri": n => { samlOrWsFedProvider.passiveSignInUri = n.getStringValue() as any ; },
        "preferredAuthenticationProtocol": n => { samlOrWsFedProvider.preferredAuthenticationProtocol = n.getEnumValue<AuthenticationProtocol>(AuthenticationProtocol) as any ; },
        "signingCertificate": n => { samlOrWsFedProvider.signingCertificate = n.getStringValue() as any ; },
    }
}
