import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUserSimulationEventInfo} from './deserializeIntoUserSimulationEventInfo';
import {UserSimulationEventInfoCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserSimulationEventInfoCollectionResponse(userSimulationEventInfoCollectionResponse: UserSimulationEventInfoCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userSimulationEventInfoCollectionResponse),
        "value": n => { userSimulationEventInfoCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUserSimulationEventInfo) as any ; },
    }
}
