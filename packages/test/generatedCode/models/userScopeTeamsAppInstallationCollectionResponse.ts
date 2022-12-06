import {BaseCollectionPaginationCountResponse, UserScopeTeamsAppInstallation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserScopeTeamsAppInstallationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UserScopeTeamsAppInstallation[];
}
