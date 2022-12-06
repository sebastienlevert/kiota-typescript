import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoTeamsTemplate} from './deserializeIntoTeamsTemplate';
import {TeamsTemplateCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsTemplateCollectionResponse(teamsTemplateCollectionResponse: TeamsTemplateCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(teamsTemplateCollectionResponse),
        "value": n => { teamsTemplateCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTeamsTemplate) as any ; },
    }
}
