import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoServicePrincipal} from './deserializeIntoServicePrincipal';
import {ServicePrincipalCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServicePrincipalCollectionResponse(servicePrincipalCollectionResponse: ServicePrincipalCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(servicePrincipalCollectionResponse),
        "value": n => { servicePrincipalCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoServicePrincipal) as any ; },
    }
}
