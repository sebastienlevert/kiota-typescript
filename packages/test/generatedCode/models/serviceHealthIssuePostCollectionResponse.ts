import {BaseCollectionPaginationCountResponse, ServiceHealthIssuePost} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ServiceHealthIssuePostCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ServiceHealthIssuePost[];
}
