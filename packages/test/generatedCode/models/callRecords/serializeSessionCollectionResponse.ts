import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {SessionCollectionResponse} from './index';
import {serializeSession} from './serializeSession';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSessionCollectionResponse(writer: SerializationWriter, sessionCollectionResponse: SessionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, sessionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", sessionCollectionResponse.value as any, serializeSession);
}
