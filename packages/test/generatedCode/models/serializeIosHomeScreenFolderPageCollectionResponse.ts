import {IosHomeScreenFolderPageCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIosHomeScreenFolderPage} from './serializeIosHomeScreenFolderPage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosHomeScreenFolderPageCollectionResponse(writer: SerializationWriter, iosHomeScreenFolderPageCollectionResponse: IosHomeScreenFolderPageCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, iosHomeScreenFolderPageCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", iosHomeScreenFolderPageCollectionResponse.value as any, serializeIosHomeScreenFolderPage);
}
