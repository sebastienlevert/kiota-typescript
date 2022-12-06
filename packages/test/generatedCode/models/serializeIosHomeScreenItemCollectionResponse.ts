import {IosHomeScreenItemCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIosHomeScreenItem} from './serializeIosHomeScreenItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosHomeScreenItemCollectionResponse(writer: SerializationWriter, iosHomeScreenItemCollectionResponse: IosHomeScreenItemCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, iosHomeScreenItemCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", iosHomeScreenItemCollectionResponse.value as any, serializeIosHomeScreenItem);
}
