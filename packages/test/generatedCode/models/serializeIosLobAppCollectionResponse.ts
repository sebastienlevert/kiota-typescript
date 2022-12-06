import {IosLobAppCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIosLobApp} from './serializeIosLobApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosLobAppCollectionResponse(writer: SerializationWriter, iosLobAppCollectionResponse: IosLobAppCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, iosLobAppCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", iosLobAppCollectionResponse.value as any, serializeIosLobApp);
}
