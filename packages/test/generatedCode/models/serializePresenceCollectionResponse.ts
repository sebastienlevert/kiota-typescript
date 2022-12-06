import {PresenceCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePresence} from './serializePresence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePresenceCollectionResponse(writer: SerializationWriter, presenceCollectionResponse: PresenceCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, presenceCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", presenceCollectionResponse.value as any, serializePresence);
}
