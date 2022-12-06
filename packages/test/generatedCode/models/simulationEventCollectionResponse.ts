import {BaseCollectionPaginationCountResponse, SimulationEvent} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SimulationEventCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SimulationEvent[];
}
