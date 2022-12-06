import {UploadSession} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUploadSession(uploadSession: UploadSession | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "expirationDateTime": n => { uploadSession.expirationDateTime = n.getDateValue() as any ; },
        "nextExpectedRanges": n => { uploadSession.nextExpectedRanges = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "@odata.type": n => { uploadSession.odataType = n.getStringValue() as any ; },
        "uploadUrl": n => { uploadSession.uploadUrl = n.getStringValue() as any ; },
    }
}
