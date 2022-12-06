import {TeamworkTagCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTeamworkTag} from './serializeTeamworkTag';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamworkTagCollectionResponse(writer: SerializationWriter, teamworkTagCollectionResponse: TeamworkTagCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, teamworkTagCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", teamworkTagCollectionResponse.value as any, serializeTeamworkTag);
}
