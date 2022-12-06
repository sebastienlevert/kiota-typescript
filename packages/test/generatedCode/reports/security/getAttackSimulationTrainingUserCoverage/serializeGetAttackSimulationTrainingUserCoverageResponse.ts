import {serializeAttackSimulationTrainingUserCoverage} from '../../../models/serializeAttackSimulationTrainingUserCoverage';
import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {GetAttackSimulationTrainingUserCoverageResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetAttackSimulationTrainingUserCoverageResponse(writer: SerializationWriter, getAttackSimulationTrainingUserCoverageResponse: GetAttackSimulationTrainingUserCoverageResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getAttackSimulationTrainingUserCoverageResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", getAttackSimulationTrainingUserCoverageResponse.value as any, serializeAttackSimulationTrainingUserCoverage);
}
