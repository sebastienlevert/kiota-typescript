import {BaseCollectionPaginationCountResponse, UserSimulationEventInfo} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserSimulationEventInfoCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UserSimulationEventInfo[];
}
