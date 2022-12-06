import {IosHomeScreenPageCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIosHomeScreenPage} from './serializeIosHomeScreenPage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosHomeScreenPageCollectionResponse(writer: SerializationWriter, iosHomeScreenPageCollectionResponse: IosHomeScreenPageCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, iosHomeScreenPageCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", iosHomeScreenPageCollectionResponse.value as any, serializeIosHomeScreenPage);
}
