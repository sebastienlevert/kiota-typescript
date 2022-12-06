import {BaseCollectionPaginationCountResponse, SharedInsight} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SharedInsightCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SharedInsight[];
}
