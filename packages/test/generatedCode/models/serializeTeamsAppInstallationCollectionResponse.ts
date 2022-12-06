import {TeamsAppInstallationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTeamsAppInstallation} from './serializeTeamsAppInstallation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsAppInstallationCollectionResponse(writer: SerializationWriter, teamsAppInstallationCollectionResponse: TeamsAppInstallationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, teamsAppInstallationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", teamsAppInstallationCollectionResponse.value as any, serializeTeamsAppInstallation);
}
