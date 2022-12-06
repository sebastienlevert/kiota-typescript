import {IosStoreAppCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIosStoreApp} from './serializeIosStoreApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosStoreAppCollectionResponse(writer: SerializationWriter, iosStoreAppCollectionResponse: IosStoreAppCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, iosStoreAppCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", iosStoreAppCollectionResponse.value as any, serializeIosStoreApp);
}
