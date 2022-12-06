import {SharedWithChannelTeamInfoCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSharedWithChannelTeamInfo} from './serializeSharedWithChannelTeamInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSharedWithChannelTeamInfoCollectionResponse(writer: SerializationWriter, sharedWithChannelTeamInfoCollectionResponse: SharedWithChannelTeamInfoCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, sharedWithChannelTeamInfoCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", sharedWithChannelTeamInfoCollectionResponse.value as any, serializeSharedWithChannelTeamInfo);
}
