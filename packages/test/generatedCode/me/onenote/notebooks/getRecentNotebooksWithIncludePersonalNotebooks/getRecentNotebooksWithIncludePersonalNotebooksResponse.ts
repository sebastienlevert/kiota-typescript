import {BaseCollectionPaginationCountResponse, RecentNotebook} from '../../../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetRecentNotebooksWithIncludePersonalNotebooksResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: RecentNotebook[];
}
