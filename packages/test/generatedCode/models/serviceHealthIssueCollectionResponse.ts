import {BaseCollectionPaginationCountResponse, ServiceHealthIssue} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ServiceHealthIssueCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ServiceHealthIssue[];
}
