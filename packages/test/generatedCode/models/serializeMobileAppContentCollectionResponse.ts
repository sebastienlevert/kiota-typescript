import {MobileAppContentCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMobileAppContent} from './serializeMobileAppContent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileAppContentCollectionResponse(writer: SerializationWriter, mobileAppContentCollectionResponse: MobileAppContentCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, mobileAppContentCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", mobileAppContentCollectionResponse.value as any, serializeMobileAppContent);
}
