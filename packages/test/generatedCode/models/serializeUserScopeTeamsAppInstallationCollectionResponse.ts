import {UserScopeTeamsAppInstallationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUserScopeTeamsAppInstallation} from './serializeUserScopeTeamsAppInstallation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserScopeTeamsAppInstallationCollectionResponse(writer: SerializationWriter, userScopeTeamsAppInstallationCollectionResponse: UserScopeTeamsAppInstallationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userScopeTeamsAppInstallationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", userScopeTeamsAppInstallationCollectionResponse.value as any, serializeUserScopeTeamsAppInstallation);
}
