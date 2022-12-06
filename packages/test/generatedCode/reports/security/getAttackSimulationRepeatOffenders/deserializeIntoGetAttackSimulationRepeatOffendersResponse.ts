import {deserializeIntoAttackSimulationRepeatOffender} from '../../../models/deserializeIntoAttackSimulationRepeatOffender';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {GetAttackSimulationRepeatOffendersResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetAttackSimulationRepeatOffendersResponse(getAttackSimulationRepeatOffendersResponse: GetAttackSimulationRepeatOffendersResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getAttackSimulationRepeatOffendersResponse),
        "value": n => { getAttackSimulationRepeatOffendersResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAttackSimulationRepeatOffender) as any ; },
    }
}
