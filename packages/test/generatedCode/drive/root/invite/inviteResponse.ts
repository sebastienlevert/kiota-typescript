import {BaseCollectionPaginationCountResponse, Permission} from '../../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface InviteResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Permission[];
}
