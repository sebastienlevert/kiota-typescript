import {WipePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWipePostRequestBody(wipePostRequestBody: WipePostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "keepEnrollmentData": n => { wipePostRequestBody.keepEnrollmentData = n.getBooleanValue() as any ; },
        "keepUserData": n => { wipePostRequestBody.keepUserData = n.getBooleanValue() as any ; },
        "macOsUnlockCode": n => { wipePostRequestBody.macOsUnlockCode = n.getStringValue() as any ; },
        "persistEsimDataPlan": n => { wipePostRequestBody.persistEsimDataPlan = n.getBooleanValue() as any ; },
    }
}
