import {BaseCollectionPaginationCountResponse, Simulation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SimulationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Simulation[];
}
