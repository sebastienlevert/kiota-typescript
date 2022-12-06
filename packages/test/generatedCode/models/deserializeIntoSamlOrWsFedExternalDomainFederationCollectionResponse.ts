import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSamlOrWsFedExternalDomainFederation} from './deserializeIntoSamlOrWsFedExternalDomainFederation';
import {SamlOrWsFedExternalDomainFederationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSamlOrWsFedExternalDomainFederationCollectionResponse(samlOrWsFedExternalDomainFederationCollectionResponse: SamlOrWsFedExternalDomainFederationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(samlOrWsFedExternalDomainFederationCollectionResponse),
        "value": n => { samlOrWsFedExternalDomainFederationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSamlOrWsFedExternalDomainFederation) as any ; },
    }
}
