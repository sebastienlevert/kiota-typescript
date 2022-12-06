import {PhoneCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePhone} from './serializePhone';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePhoneCollectionResponse(writer: SerializationWriter, phoneCollectionResponse: PhoneCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, phoneCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", phoneCollectionResponse.value as any, serializePhone);
}
