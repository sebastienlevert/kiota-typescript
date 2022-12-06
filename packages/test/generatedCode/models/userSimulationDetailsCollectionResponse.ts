import {BaseCollectionPaginationCountResponse, UserSimulationDetails} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserSimulationDetailsCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UserSimulationDetails[];
}
