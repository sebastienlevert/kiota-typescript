import {TeamworkTagMemberCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTeamworkTagMember} from './serializeTeamworkTagMember';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamworkTagMemberCollectionResponse(writer: SerializationWriter, teamworkTagMemberCollectionResponse: TeamworkTagMemberCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, teamworkTagMemberCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", teamworkTagMemberCollectionResponse.value as any, serializeTeamworkTagMember);
}
