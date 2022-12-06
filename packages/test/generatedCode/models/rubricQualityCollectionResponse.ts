import {BaseCollectionPaginationCountResponse, RubricQuality} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RubricQualityCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: RubricQuality[];
}
