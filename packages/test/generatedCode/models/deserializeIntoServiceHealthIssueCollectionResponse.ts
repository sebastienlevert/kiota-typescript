import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoServiceHealthIssue} from './deserializeIntoServiceHealthIssue';
import {ServiceHealthIssueCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceHealthIssueCollectionResponse(serviceHealthIssueCollectionResponse: ServiceHealthIssueCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(serviceHealthIssueCollectionResponse),
        "value": n => { serviceHealthIssueCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoServiceHealthIssue) as any ; },
    }
}
