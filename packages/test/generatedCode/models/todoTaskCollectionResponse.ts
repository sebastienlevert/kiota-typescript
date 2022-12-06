import {BaseCollectionPaginationCountResponse, TodoTask} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TodoTaskCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: TodoTask[];
}
