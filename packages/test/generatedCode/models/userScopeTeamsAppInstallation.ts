import {Chat, TeamsAppInstallation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserScopeTeamsAppInstallation extends Partial<Parsable>, TeamsAppInstallation {
    /** The chat property */
    chat?: Chat;
}
