import {BaseCollectionPaginationCountResponse, TodoTaskList} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TodoTaskListCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: TodoTaskList[];
}
