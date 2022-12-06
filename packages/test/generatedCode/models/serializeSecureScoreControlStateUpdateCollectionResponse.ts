import {SecureScoreControlStateUpdateCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSecureScoreControlStateUpdate} from './serializeSecureScoreControlStateUpdate';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSecureScoreControlStateUpdateCollectionResponse(writer: SerializationWriter, secureScoreControlStateUpdateCollectionResponse: SecureScoreControlStateUpdateCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, secureScoreControlStateUpdateCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", secureScoreControlStateUpdateCollectionResponse.value as any, serializeSecureScoreControlStateUpdate);
}
