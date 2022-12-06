import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEdiscoveryReviewTag} from '../../../../../../models/security/deserializeIntoEdiscoveryReviewTag';
import {AsHierarchyResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAsHierarchyResponse(asHierarchyResponse: AsHierarchyResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(asHierarchyResponse),
        "value": n => { asHierarchyResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEdiscoveryReviewTag) as any ; },
    }
}
