import {BaseCollectionPaginationCountResponse, SimulationAutomation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SimulationAutomationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SimulationAutomation[];
}
