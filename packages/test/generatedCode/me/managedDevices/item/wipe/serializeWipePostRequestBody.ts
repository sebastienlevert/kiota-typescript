import {WipePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWipePostRequestBody(writer: SerializationWriter, wipePostRequestBody: WipePostRequestBody | undefined = {}) : void {
            writer.writeBooleanValue("keepEnrollmentData", wipePostRequestBody.keepEnrollmentData);
            writer.writeBooleanValue("keepUserData", wipePostRequestBody.keepUserData);
            writer.writeStringValue("macOsUnlockCode", wipePostRequestBody.macOsUnlockCode);
            writer.writeBooleanValue("persistEsimDataPlan", wipePostRequestBody.persistEsimDataPlan);
}
