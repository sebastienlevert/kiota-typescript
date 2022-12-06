import {BaseCollectionPaginationCountResponse, UsedInsight} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UsedInsightCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UsedInsight[];
}
