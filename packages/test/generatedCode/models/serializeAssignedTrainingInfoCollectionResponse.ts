import {AssignedTrainingInfoCollectionResponse} from './index';
import {serializeAssignedTrainingInfo} from './serializeAssignedTrainingInfo';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignedTrainingInfoCollectionResponse(writer: SerializationWriter, assignedTrainingInfoCollectionResponse: AssignedTrainingInfoCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, assignedTrainingInfoCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", assignedTrainingInfoCollectionResponse.value as any, serializeAssignedTrainingInfo);
}
