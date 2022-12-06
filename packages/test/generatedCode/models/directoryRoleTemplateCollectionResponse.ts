import {BaseCollectionPaginationCountResponse, DirectoryRoleTemplate} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DirectoryRoleTemplateCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DirectoryRoleTemplate[];
}
