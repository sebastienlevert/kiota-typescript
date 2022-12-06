import {deserializeIntoDriveRecipient} from '../../../../models/deserializeIntoDriveRecipient';
import {GrantPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGrantPostRequestBody(grantPostRequestBody: GrantPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "recipients": n => { grantPostRequestBody.recipients = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDriveRecipient) as any ; },
        "roles": n => { grantPostRequestBody.roles = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
