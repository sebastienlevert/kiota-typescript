import {TeamsTemplateCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTeamsTemplate} from './serializeTeamsTemplate';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsTemplateCollectionResponse(writer: SerializationWriter, teamsTemplateCollectionResponse: TeamsTemplateCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, teamsTemplateCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", teamsTemplateCollectionResponse.value as any, serializeTeamsTemplate);
}
