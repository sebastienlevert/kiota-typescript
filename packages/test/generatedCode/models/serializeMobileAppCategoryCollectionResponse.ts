import {MobileAppCategoryCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMobileAppCategory} from './serializeMobileAppCategory';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileAppCategoryCollectionResponse(writer: SerializationWriter, mobileAppCategoryCollectionResponse: MobileAppCategoryCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, mobileAppCategoryCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", mobileAppCategoryCollectionResponse.value as any, serializeMobileAppCategory);
}
