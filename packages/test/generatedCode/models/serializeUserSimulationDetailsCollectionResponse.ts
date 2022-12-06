import {UserSimulationDetailsCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUserSimulationDetails} from './serializeUserSimulationDetails';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserSimulationDetailsCollectionResponse(writer: SerializationWriter, userSimulationDetailsCollectionResponse: UserSimulationDetailsCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userSimulationDetailsCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", userSimulationDetailsCollectionResponse.value as any, serializeUserSimulationDetails);
}
