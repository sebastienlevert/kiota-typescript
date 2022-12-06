import {deserializeIntoIdentitySource} from './deserializeIntoIdentitySource';
import {ExternalDomainFederation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExternalDomainFederation(externalDomainFederation: ExternalDomainFederation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentitySource(externalDomainFederation),
        "displayName": n => { externalDomainFederation.displayName = n.getStringValue() as any ; },
        "domainName": n => { externalDomainFederation.domainName = n.getStringValue() as any ; },
        "issuerUri": n => { externalDomainFederation.issuerUri = n.getStringValue() as any ; },
    }
}
