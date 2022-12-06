import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoConnectedOrganization} from './deserializeIntoConnectedOrganization';
import {ConnectedOrganizationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConnectedOrganizationCollectionResponse(connectedOrganizationCollectionResponse: ConnectedOrganizationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(connectedOrganizationCollectionResponse),
        "value": n => { connectedOrganizationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoConnectedOrganization) as any ; },
    }
}
