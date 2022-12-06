import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoTeamsTab} from './deserializeIntoTeamsTab';
import {TeamsTabCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsTabCollectionResponse(teamsTabCollectionResponse: TeamsTabCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(teamsTabCollectionResponse),
        "value": n => { teamsTabCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTeamsTab) as any ; },
    }
}
