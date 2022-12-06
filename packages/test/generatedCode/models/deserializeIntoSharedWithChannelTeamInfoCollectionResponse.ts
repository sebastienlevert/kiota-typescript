import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSharedWithChannelTeamInfo} from './deserializeIntoSharedWithChannelTeamInfo';
import {SharedWithChannelTeamInfoCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSharedWithChannelTeamInfoCollectionResponse(sharedWithChannelTeamInfoCollectionResponse: SharedWithChannelTeamInfoCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(sharedWithChannelTeamInfoCollectionResponse),
        "value": n => { sharedWithChannelTeamInfoCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSharedWithChannelTeamInfo) as any ; },
    }
}
