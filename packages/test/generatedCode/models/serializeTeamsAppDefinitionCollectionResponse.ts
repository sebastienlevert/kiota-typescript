import {TeamsAppDefinitionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTeamsAppDefinition} from './serializeTeamsAppDefinition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsAppDefinitionCollectionResponse(writer: SerializationWriter, teamsAppDefinitionCollectionResponse: TeamsAppDefinitionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, teamsAppDefinitionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", teamsAppDefinitionCollectionResponse.value as any, serializeTeamsAppDefinition);
}
