import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {SetCollectionResponse} from './index';
import {serializeSet} from './serializeSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSetCollectionResponse(writer: SerializationWriter, setCollectionResponse: SetCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, setCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", setCollectionResponse.value as any, serializeSet);
}
