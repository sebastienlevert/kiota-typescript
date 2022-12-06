import {serializeAttackSimulationRepeatOffender} from '../../../models/serializeAttackSimulationRepeatOffender';
import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {GetAttackSimulationRepeatOffendersResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetAttackSimulationRepeatOffendersResponse(writer: SerializationWriter, getAttackSimulationRepeatOffendersResponse: GetAttackSimulationRepeatOffendersResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getAttackSimulationRepeatOffendersResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", getAttackSimulationRepeatOffendersResponse.value as any, serializeAttackSimulationRepeatOffender);
}
