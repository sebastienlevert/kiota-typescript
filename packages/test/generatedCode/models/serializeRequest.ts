import {Request} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRequest(writer: SerializationWriter, request: Request | undefined = {}) : void {
        serializeEntity(writer, request)
            writer.writeStringValue("approvalId", request.approvalId);
            writer.writeDateValue("completedDateTime", request.completedDateTime);
            writer.writeObjectValueFromMethod("createdBy", request.createdBy as any, serializeIdentitySet);
            writer.writeDateValue("createdDateTime", request.createdDateTime);
            writer.writeStringValue("customData", request.customData);
            writer.writeStringValue("status", request.status);
}
