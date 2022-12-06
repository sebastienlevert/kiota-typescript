import {InternetMessageHeaderCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeInternetMessageHeader} from './serializeInternetMessageHeader';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInternetMessageHeaderCollectionResponse(writer: SerializationWriter, internetMessageHeaderCollectionResponse: InternetMessageHeaderCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, internetMessageHeaderCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", internetMessageHeaderCollectionResponse.value as any, serializeInternetMessageHeader);
}
