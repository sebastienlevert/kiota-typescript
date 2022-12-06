import {BaseCollectionPaginationCountResponse, RiskDetection} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RiskDetectionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: RiskDetection[];
}
