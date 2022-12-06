import {TeamsAppCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTeamsApp} from './serializeTeamsApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsAppCollectionResponse(writer: SerializationWriter, teamsAppCollectionResponse: TeamsAppCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, teamsAppCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", teamsAppCollectionResponse.value as any, serializeTeamsApp);
}
