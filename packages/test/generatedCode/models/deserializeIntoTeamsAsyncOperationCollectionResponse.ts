import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoTeamsAsyncOperation} from './deserializeIntoTeamsAsyncOperation';
import {TeamsAsyncOperationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsAsyncOperationCollectionResponse(teamsAsyncOperationCollectionResponse: TeamsAsyncOperationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(teamsAsyncOperationCollectionResponse),
        "value": n => { teamsAsyncOperationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTeamsAsyncOperation) as any ; },
    }
}
