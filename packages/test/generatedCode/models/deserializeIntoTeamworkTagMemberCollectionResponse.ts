import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoTeamworkTagMember} from './deserializeIntoTeamworkTagMember';
import {TeamworkTagMemberCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamworkTagMemberCollectionResponse(teamworkTagMemberCollectionResponse: TeamworkTagMemberCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(teamworkTagMemberCollectionResponse),
        "value": n => { teamworkTagMemberCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTeamworkTagMember) as any ; },
    }
}
