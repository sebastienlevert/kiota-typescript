import {AttackSimulationRepeatOffender, BaseCollectionPaginationCountResponse} from '../../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetAttackSimulationRepeatOffendersResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: AttackSimulationRepeatOffender[];
}
