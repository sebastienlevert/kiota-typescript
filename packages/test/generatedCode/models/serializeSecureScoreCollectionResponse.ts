import {SecureScoreCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSecureScore} from './serializeSecureScore';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSecureScoreCollectionResponse(writer: SerializationWriter, secureScoreCollectionResponse: SecureScoreCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, secureScoreCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", secureScoreCollectionResponse.value as any, serializeSecureScore);
}
