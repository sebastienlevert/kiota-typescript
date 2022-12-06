import {AssociatedTeamInfo, Entity, UserScopeTeamsAppInstallation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserTeamwork extends Entity, Partial<Parsable> {
    /** The list of associatedTeamInfo objects that a user is associated with. */
    associatedTeams?: AssociatedTeamInfo[];
    /** The apps installed in the personal scope of this user. */
    installedApps?: UserScopeTeamsAppInstallation[];
}
