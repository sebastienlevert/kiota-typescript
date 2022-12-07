import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {Request} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRequest(request: Request | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(request),
        "approvalId": n => { request.approvalId = n.getStringValue() as any ; },
        "completedDateTime": n => { request.completedDateTime = n.getDateValue() as any ; },
        "createdBy": n => { request.createdBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "createdDateTime": n => { request.createdDateTime = n.getDateValue() as any ; },
        "customData": n => { request.customData = n.getStringValue() as any ; },
        "status": n => { request.status = n.getStringValue() as any ; },
    }
}
