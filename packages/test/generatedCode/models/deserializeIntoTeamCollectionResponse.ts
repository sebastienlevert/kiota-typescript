import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoTeam} from './deserializeIntoTeam';
import {TeamCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamCollectionResponse(teamCollectionResponse: TeamCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(teamCollectionResponse),
        "value": n => { teamCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTeam) as any ; },
    }
}
