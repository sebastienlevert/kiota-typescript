import {Entity, SharedInsight, Trending, UsedInsight} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OfficeGraphInsights extends Entity, Partial<Parsable> {
    /** Access this property from the derived type itemInsights. */
    shared?: SharedInsight[];
    /** Access this property from the derived type itemInsights. */
    trending?: Trending[];
    /** Access this property from the derived type itemInsights. */
    used?: UsedInsight[];
}
