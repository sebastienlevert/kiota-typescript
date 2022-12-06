import {BaseCollectionPaginationCountResponse, RecommendedAction} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RecommendedActionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: RecommendedAction[];
}
