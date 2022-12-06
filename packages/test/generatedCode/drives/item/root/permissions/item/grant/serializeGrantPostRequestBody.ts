import {serializeDriveRecipient} from '../../../../../../models/serializeDriveRecipient';
import {GrantPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGrantPostRequestBody(writer: SerializationWriter, grantPostRequestBody: GrantPostRequestBody | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("recipients", grantPostRequestBody.recipients as any, serializeDriveRecipient);
            writer.writeCollectionOfPrimitiveValues<string>("roles", grantPostRequestBody.roles);
}
