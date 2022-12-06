import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoTeamworkUserIdentity} from './deserializeIntoTeamworkUserIdentity';
import {TeamworkUserIdentityCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamworkUserIdentityCollectionResponse(teamworkUserIdentityCollectionResponse: TeamworkUserIdentityCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(teamworkUserIdentityCollectionResponse),
        "value": n => { teamworkUserIdentityCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTeamworkUserIdentity) as any ; },
    }
}
