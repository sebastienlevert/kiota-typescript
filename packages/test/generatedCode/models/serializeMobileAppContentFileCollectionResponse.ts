import {MobileAppContentFileCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMobileAppContentFile} from './serializeMobileAppContentFile';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileAppContentFileCollectionResponse(writer: SerializationWriter, mobileAppContentFileCollectionResponse: MobileAppContentFileCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, mobileAppContentFileCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", mobileAppContentFileCollectionResponse.value as any, serializeMobileAppContentFile);
}
