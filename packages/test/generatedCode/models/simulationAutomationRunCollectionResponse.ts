import {BaseCollectionPaginationCountResponse, SimulationAutomationRun} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SimulationAutomationRunCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SimulationAutomationRun[];
}
