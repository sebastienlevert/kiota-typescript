import {EmailAddressCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEmailAddress} from './serializeEmailAddress';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEmailAddressCollectionResponse(writer: SerializationWriter, emailAddressCollectionResponse: EmailAddressCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, emailAddressCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", emailAddressCollectionResponse.value as any, serializeEmailAddress);
}
