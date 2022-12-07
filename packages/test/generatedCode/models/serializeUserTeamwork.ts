import {UserTeamwork} from './index';
import {serializeAssociatedTeamInfo} from './serializeAssociatedTeamInfo';
import {serializeEntity} from './serializeEntity';
import {serializeUserScopeTeamsAppInstallation} from './serializeUserScopeTeamsAppInstallation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserTeamwork(writer: SerializationWriter, userTeamwork: UserTeamwork | undefined = {}) : void {
        serializeEntity(writer, userTeamwork)
            writer.writeCollectionOfObjectValuesFromMethod("associatedTeams", userTeamwork.associatedTeams as any, serializeAssociatedTeamInfo);
            writer.writeCollectionOfObjectValuesFromMethod("installedApps", userTeamwork.installedApps as any, serializeUserScopeTeamsAppInstallation);
}
