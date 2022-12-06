import {deserializeIntoAttackSimulationSimulationUserCoverage} from '../../../models/deserializeIntoAttackSimulationSimulationUserCoverage';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {GetAttackSimulationSimulationUserCoverageResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetAttackSimulationSimulationUserCoverageResponse(getAttackSimulationSimulationUserCoverageResponse: GetAttackSimulationSimulationUserCoverageResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getAttackSimulationSimulationUserCoverageResponse),
        "value": n => { getAttackSimulationSimulationUserCoverageResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAttackSimulationSimulationUserCoverage) as any ; },
    }
}
