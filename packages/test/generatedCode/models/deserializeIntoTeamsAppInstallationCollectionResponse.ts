import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoTeamsAppInstallation} from './deserializeIntoTeamsAppInstallation';
import {TeamsAppInstallationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsAppInstallationCollectionResponse(teamsAppInstallationCollectionResponse: TeamsAppInstallationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(teamsAppInstallationCollectionResponse),
        "value": n => { teamsAppInstallationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTeamsAppInstallation) as any ; },
    }
}
