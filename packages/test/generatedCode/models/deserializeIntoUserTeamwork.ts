import {deserializeIntoAssociatedTeamInfo} from './deserializeIntoAssociatedTeamInfo';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoUserScopeTeamsAppInstallation} from './deserializeIntoUserScopeTeamsAppInstallation';
import {UserTeamwork} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserTeamwork(userTeamwork: UserTeamwork | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userTeamwork),
        "associatedTeams": n => { userTeamwork.associatedTeams = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAssociatedTeamInfo) as any ; },
        "installedApps": n => { userTeamwork.installedApps = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUserScopeTeamsAppInstallation) as any ; },
    }
}
