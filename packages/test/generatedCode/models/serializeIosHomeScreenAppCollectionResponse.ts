import {IosHomeScreenAppCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIosHomeScreenApp} from './serializeIosHomeScreenApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosHomeScreenAppCollectionResponse(writer: SerializationWriter, iosHomeScreenAppCollectionResponse: IosHomeScreenAppCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, iosHomeScreenAppCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", iosHomeScreenAppCollectionResponse.value as any, serializeIosHomeScreenApp);
}
