import {serializeAttackSimulationSimulationUserCoverage} from '../../../models/serializeAttackSimulationSimulationUserCoverage';
import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {GetAttackSimulationSimulationUserCoverageResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetAttackSimulationSimulationUserCoverageResponse(writer: SerializationWriter, getAttackSimulationSimulationUserCoverageResponse: GetAttackSimulationSimulationUserCoverageResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getAttackSimulationSimulationUserCoverageResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", getAttackSimulationSimulationUserCoverageResponse.value as any, serializeAttackSimulationSimulationUserCoverage);
}
