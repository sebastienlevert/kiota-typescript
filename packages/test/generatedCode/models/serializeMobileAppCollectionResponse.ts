import {MobileAppCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMobileApp} from './serializeMobileApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileAppCollectionResponse(writer: SerializationWriter, mobileAppCollectionResponse: MobileAppCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, mobileAppCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", mobileAppCollectionResponse.value as any, serializeMobileApp);
}
