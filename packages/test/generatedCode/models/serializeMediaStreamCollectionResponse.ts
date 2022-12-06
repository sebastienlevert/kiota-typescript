import {MediaStreamCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMediaStream} from './serializeMediaStream';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMediaStreamCollectionResponse(writer: SerializationWriter, mediaStreamCollectionResponse: MediaStreamCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, mediaStreamCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", mediaStreamCollectionResponse.value as any, serializeMediaStream);
}
