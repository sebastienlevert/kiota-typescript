import {AttackSimulationTrainingUserCoverage, BaseCollectionPaginationCountResponse} from '../../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetAttackSimulationTrainingUserCoverageResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: AttackSimulationTrainingUserCoverage[];
}
