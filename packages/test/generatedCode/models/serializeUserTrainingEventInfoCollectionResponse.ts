import {UserTrainingEventInfoCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUserTrainingEventInfo} from './serializeUserTrainingEventInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserTrainingEventInfoCollectionResponse(writer: SerializationWriter, userTrainingEventInfoCollectionResponse: UserTrainingEventInfoCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userTrainingEventInfoCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", userTrainingEventInfoCollectionResponse.value as any, serializeUserTrainingEventInfo);
}
