import {EntityType} from './entityType';
import {AggregationOption, ResultTemplateOption, SearchAlterationOptions, SearchQuery, SortProperty} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SearchRequest extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The aggregationFilters property */
    aggregationFilters?: string[];
    /** The aggregations property */
    aggregations?: AggregationOption[];
    /** The contentSources property */
    contentSources?: string[];
    /** The enableTopResults property */
    enableTopResults?: boolean;
    /** The entityTypes property */
    entityTypes?: EntityType[];
    /** The fields property */
    fields?: string[];
    /** The from property */
    from?: number;
    /** The OdataType property */
    odataType?: string;
    /** The query property */
    query?: SearchQuery;
    /** The queryAlterationOptions property */
    queryAlterationOptions?: SearchAlterationOptions;
    /** The resultTemplateOptions property */
    resultTemplateOptions?: ResultTemplateOption;
    /** The size property */
    size?: number;
    /** The sortProperties property */
    sortProperties?: SortProperty[];
}
