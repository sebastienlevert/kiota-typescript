import {deserializeIntoAttackSimulationTrainingUserCoverage} from '../../../models/deserializeIntoAttackSimulationTrainingUserCoverage';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {GetAttackSimulationTrainingUserCoverageResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetAttackSimulationTrainingUserCoverageResponse(getAttackSimulationTrainingUserCoverageResponse: GetAttackSimulationTrainingUserCoverageResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getAttackSimulationTrainingUserCoverageResponse),
        "value": n => { getAttackSimulationTrainingUserCoverageResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAttackSimulationTrainingUserCoverage) as any ; },
    }
}
