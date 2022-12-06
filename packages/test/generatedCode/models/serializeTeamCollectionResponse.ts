import {TeamCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTeam} from './serializeTeam';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamCollectionResponse(writer: SerializationWriter, teamCollectionResponse: TeamCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, teamCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", teamCollectionResponse.value as any, serializeTeam);
}
