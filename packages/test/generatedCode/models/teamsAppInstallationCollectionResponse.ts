import {BaseCollectionPaginationCountResponse, TeamsAppInstallation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsAppInstallationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: TeamsAppInstallation[];
}
