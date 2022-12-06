import {UserTrainingStatusInfoCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUserTrainingStatusInfo} from './serializeUserTrainingStatusInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserTrainingStatusInfoCollectionResponse(writer: SerializationWriter, userTrainingStatusInfoCollectionResponse: UserTrainingStatusInfoCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userTrainingStatusInfoCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", userTrainingStatusInfoCollectionResponse.value as any, serializeUserTrainingStatusInfo);
}
