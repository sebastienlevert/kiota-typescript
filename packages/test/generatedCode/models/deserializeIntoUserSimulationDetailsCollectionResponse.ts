import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUserSimulationDetails} from './deserializeIntoUserSimulationDetails';
import {UserSimulationDetailsCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserSimulationDetailsCollectionResponse(userSimulationDetailsCollectionResponse: UserSimulationDetailsCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userSimulationDetailsCollectionResponse),
        "value": n => { userSimulationDetailsCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUserSimulationDetails) as any ; },
    }
}
