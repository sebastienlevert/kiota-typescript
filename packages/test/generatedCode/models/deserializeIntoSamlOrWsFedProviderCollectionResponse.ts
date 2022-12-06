import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSamlOrWsFedProvider} from './deserializeIntoSamlOrWsFedProvider';
import {SamlOrWsFedProviderCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSamlOrWsFedProviderCollectionResponse(samlOrWsFedProviderCollectionResponse: SamlOrWsFedProviderCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(samlOrWsFedProviderCollectionResponse),
        "value": n => { samlOrWsFedProviderCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSamlOrWsFedProvider) as any ; },
    }
}
