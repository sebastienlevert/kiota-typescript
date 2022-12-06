import {AlternativeSecurityIdCollectionResponse} from './index';
import {serializeAlternativeSecurityId} from './serializeAlternativeSecurityId';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAlternativeSecurityIdCollectionResponse(writer: SerializationWriter, alternativeSecurityIdCollectionResponse: AlternativeSecurityIdCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, alternativeSecurityIdCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", alternativeSecurityIdCollectionResponse.value as any, serializeAlternativeSecurityId);
}
