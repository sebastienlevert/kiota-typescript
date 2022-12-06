import {UserSimulationEventInfoCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUserSimulationEventInfo} from './serializeUserSimulationEventInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserSimulationEventInfoCollectionResponse(writer: SerializationWriter, userSimulationEventInfoCollectionResponse: UserSimulationEventInfoCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userSimulationEventInfoCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", userSimulationEventInfoCollectionResponse.value as any, serializeUserSimulationEventInfo);
}
