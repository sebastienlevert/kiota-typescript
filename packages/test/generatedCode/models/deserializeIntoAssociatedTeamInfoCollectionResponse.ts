import {deserializeIntoAssociatedTeamInfo} from './deserializeIntoAssociatedTeamInfo';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AssociatedTeamInfoCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAssociatedTeamInfoCollectionResponse(associatedTeamInfoCollectionResponse: AssociatedTeamInfoCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(associatedTeamInfoCollectionResponse),
        "value": n => { associatedTeamInfoCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAssociatedTeamInfo) as any ; },
    }
}
