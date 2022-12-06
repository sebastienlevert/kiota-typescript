import {Chat, TeamsAppInstallation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserScopeTeamsAppInstallation extends Partial<Parsable>, TeamsAppInstallation {
    /** The chat between the user and Teams app. */
    chat?: Chat;
}
