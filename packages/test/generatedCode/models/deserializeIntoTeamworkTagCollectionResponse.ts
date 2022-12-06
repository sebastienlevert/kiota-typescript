import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoTeamworkTag} from './deserializeIntoTeamworkTag';
import {TeamworkTagCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamworkTagCollectionResponse(teamworkTagCollectionResponse: TeamworkTagCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(teamworkTagCollectionResponse),
        "value": n => { teamworkTagCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTeamworkTag) as any ; },
    }
}
