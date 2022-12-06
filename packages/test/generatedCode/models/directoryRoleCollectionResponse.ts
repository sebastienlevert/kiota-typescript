import {BaseCollectionPaginationCountResponse, DirectoryRole} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DirectoryRoleCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DirectoryRole[];
}
