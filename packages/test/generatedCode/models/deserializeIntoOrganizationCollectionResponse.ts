import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoOrganization} from './deserializeIntoOrganization';
import {OrganizationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOrganizationCollectionResponse(organizationCollectionResponse: OrganizationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(organizationCollectionResponse),
        "value": n => { organizationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOrganization) as any ; },
    }
}
