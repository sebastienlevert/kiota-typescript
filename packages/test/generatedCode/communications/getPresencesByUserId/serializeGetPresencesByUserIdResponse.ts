import {serializeBaseCollectionPaginationCountResponse} from '../../models/serializeBaseCollectionPaginationCountResponse';
import {serializePresence} from '../../models/serializePresence';
import {GetPresencesByUserIdResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetPresencesByUserIdResponse(writer: SerializationWriter, getPresencesByUserIdResponse: GetPresencesByUserIdResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getPresencesByUserIdResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", getPresencesByUserIdResponse.value as any, serializePresence);
}
