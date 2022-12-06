import {PersonCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePerson} from './serializePerson';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePersonCollectionResponse(writer: SerializationWriter, personCollectionResponse: PersonCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, personCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", personCollectionResponse.value as any, serializePerson);
}
