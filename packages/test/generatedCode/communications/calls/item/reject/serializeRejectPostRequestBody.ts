import {RejectReason} from '../../../../models/rejectReason';
import {RejectPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRejectPostRequestBody(writer: SerializationWriter, rejectPostRequestBody: RejectPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("callbackUri", rejectPostRequestBody.callbackUri);
            writer.writeEnumValue<RejectReason>("reason", rejectPostRequestBody.reason);
}
