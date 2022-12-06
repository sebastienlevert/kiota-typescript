import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoServiceHealthIssuePost} from './deserializeIntoServiceHealthIssuePost';
import {ServiceHealthIssuePostCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceHealthIssuePostCollectionResponse(serviceHealthIssuePostCollectionResponse: ServiceHealthIssuePostCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(serviceHealthIssuePostCollectionResponse),
        "value": n => { serviceHealthIssuePostCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoServiceHealthIssuePost) as any ; },
    }
}
