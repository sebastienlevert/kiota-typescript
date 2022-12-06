import {OnlineMeetingCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeOnlineMeeting} from './serializeOnlineMeeting';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnlineMeetingCollectionResponse(writer: SerializationWriter, onlineMeetingCollectionResponse: OnlineMeetingCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, onlineMeetingCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", onlineMeetingCollectionResponse.value as any, serializeOnlineMeeting);
}
