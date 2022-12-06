import {TeamsTabCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTeamsTab} from './serializeTeamsTab';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsTabCollectionResponse(writer: SerializationWriter, teamsTabCollectionResponse: TeamsTabCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, teamsTabCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", teamsTabCollectionResponse.value as any, serializeTeamsTab);
}
