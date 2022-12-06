import {BaseCollectionPaginationCountResponse, Permission} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PermissionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Permission[];
}
