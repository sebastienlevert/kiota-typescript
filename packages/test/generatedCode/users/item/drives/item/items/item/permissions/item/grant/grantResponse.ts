import {BaseCollectionPaginationCountResponse, Permission} from '../../../../../../../../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GrantResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Permission[];
}
