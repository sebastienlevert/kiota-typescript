import {deserializeIntoExternalDomainName} from './deserializeIntoExternalDomainName';
import {deserializeIntoSamlOrWsFedProvider} from './deserializeIntoSamlOrWsFedProvider';
import {SamlOrWsFedExternalDomainFederation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSamlOrWsFedExternalDomainFederation(samlOrWsFedExternalDomainFederation: SamlOrWsFedExternalDomainFederation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSamlOrWsFedProvider(samlOrWsFedExternalDomainFederation),
        "domains": n => { samlOrWsFedExternalDomainFederation.domains = n.getCollectionOfObjectValuesFromMethod(deserializeIntoExternalDomainName) as any ; },
    }
}
