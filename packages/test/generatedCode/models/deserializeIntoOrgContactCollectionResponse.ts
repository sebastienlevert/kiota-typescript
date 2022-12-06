import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoOrgContact} from './deserializeIntoOrgContact';
import {OrgContactCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOrgContactCollectionResponse(orgContactCollectionResponse: OrgContactCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(orgContactCollectionResponse),
        "value": n => { orgContactCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOrgContact) as any ; },
    }
}
