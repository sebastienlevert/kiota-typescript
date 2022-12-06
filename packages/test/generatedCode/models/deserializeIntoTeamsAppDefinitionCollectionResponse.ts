import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoTeamsAppDefinition} from './deserializeIntoTeamsAppDefinition';
import {TeamsAppDefinitionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsAppDefinitionCollectionResponse(teamsAppDefinitionCollectionResponse: TeamsAppDefinitionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(teamsAppDefinitionCollectionResponse),
        "value": n => { teamsAppDefinitionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTeamsAppDefinition) as any ; },
    }
}
