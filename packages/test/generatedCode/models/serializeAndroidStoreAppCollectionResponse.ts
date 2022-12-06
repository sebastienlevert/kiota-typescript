import {AndroidStoreAppCollectionResponse} from './index';
import {serializeAndroidStoreApp} from './serializeAndroidStoreApp';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAndroidStoreAppCollectionResponse(writer: SerializationWriter, androidStoreAppCollectionResponse: AndroidStoreAppCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, androidStoreAppCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", androidStoreAppCollectionResponse.value as any, serializeAndroidStoreApp);
}
