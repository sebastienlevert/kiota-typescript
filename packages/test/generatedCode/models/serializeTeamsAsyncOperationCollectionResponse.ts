import {TeamsAsyncOperationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTeamsAsyncOperation} from './serializeTeamsAsyncOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsAsyncOperationCollectionResponse(writer: SerializationWriter, teamsAsyncOperationCollectionResponse: TeamsAsyncOperationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, teamsAsyncOperationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", teamsAsyncOperationCollectionResponse.value as any, serializeTeamsAsyncOperation);
}
