import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoTeamsApp} from './deserializeIntoTeamsApp';
import {TeamsAppCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsAppCollectionResponse(teamsAppCollectionResponse: TeamsAppCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(teamsAppCollectionResponse),
        "value": n => { teamsAppCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTeamsApp) as any ; },
    }
}
