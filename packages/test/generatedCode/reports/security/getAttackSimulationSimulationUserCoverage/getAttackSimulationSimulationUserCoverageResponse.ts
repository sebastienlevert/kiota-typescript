import {AttackSimulationSimulationUserCoverage, BaseCollectionPaginationCountResponse} from '../../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetAttackSimulationSimulationUserCoverageResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: AttackSimulationSimulationUserCoverage[];
}
