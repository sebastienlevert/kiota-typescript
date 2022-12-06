import {SecureScoreControlProfileCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSecureScoreControlProfile} from './serializeSecureScoreControlProfile';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSecureScoreControlProfileCollectionResponse(writer: SerializationWriter, secureScoreControlProfileCollectionResponse: SecureScoreControlProfileCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, secureScoreControlProfileCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", secureScoreControlProfileCollectionResponse.value as any, serializeSecureScoreControlProfile);
}
