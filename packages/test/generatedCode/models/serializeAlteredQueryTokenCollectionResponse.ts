import {AlteredQueryTokenCollectionResponse} from './index';
import {serializeAlteredQueryToken} from './serializeAlteredQueryToken';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAlteredQueryTokenCollectionResponse(writer: SerializationWriter, alteredQueryTokenCollectionResponse: AlteredQueryTokenCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, alteredQueryTokenCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", alteredQueryTokenCollectionResponse.value as any, serializeAlteredQueryToken);
}
