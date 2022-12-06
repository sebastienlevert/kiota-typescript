import {BaseCollectionPaginationCountResponse, RubricQualitySelectedColumnModel} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RubricQualitySelectedColumnModelCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: RubricQualitySelectedColumnModel[];
}
