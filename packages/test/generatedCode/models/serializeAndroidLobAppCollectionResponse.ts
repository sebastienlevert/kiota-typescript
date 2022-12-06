import {AndroidLobAppCollectionResponse} from './index';
import {serializeAndroidLobApp} from './serializeAndroidLobApp';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAndroidLobAppCollectionResponse(writer: SerializationWriter, androidLobAppCollectionResponse: AndroidLobAppCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, androidLobAppCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", androidLobAppCollectionResponse.value as any, serializeAndroidLobApp);
}
