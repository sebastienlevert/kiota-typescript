import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUserScopeTeamsAppInstallation} from './deserializeIntoUserScopeTeamsAppInstallation';
import {UserScopeTeamsAppInstallationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserScopeTeamsAppInstallationCollectionResponse(userScopeTeamsAppInstallationCollectionResponse: UserScopeTeamsAppInstallationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userScopeTeamsAppInstallationCollectionResponse),
        "value": n => { userScopeTeamsAppInstallationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUserScopeTeamsAppInstallation) as any ; },
    }
}
