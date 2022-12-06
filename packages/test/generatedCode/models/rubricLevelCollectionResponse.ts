import {BaseCollectionPaginationCountResponse, RubricLevel} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RubricLevelCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: RubricLevel[];
}
