import {BaseCollectionPaginationCountResponse} from '../../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetAuditCategoriesResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: string[];
}
