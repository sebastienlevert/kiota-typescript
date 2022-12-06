import {BaseCollectionPaginationCountResponse} from '../../../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CheckMemberObjectsResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: string[];
}
