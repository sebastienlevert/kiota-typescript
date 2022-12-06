import {DirectRoutingLogRow} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDirectRoutingLogRow(directRoutingLogRow: DirectRoutingLogRow | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "calleeNumber": n => { directRoutingLogRow.calleeNumber = n.getStringValue() as any ; },
        "callEndSubReason": n => { directRoutingLogRow.callEndSubReason = n.getNumberValue() as any ; },
        "callerNumber": n => { directRoutingLogRow.callerNumber = n.getStringValue() as any ; },
        "callType": n => { directRoutingLogRow.callType = n.getStringValue() as any ; },
        "correlationId": n => { directRoutingLogRow.correlationId = n.getStringValue() as any ; },
        "duration": n => { directRoutingLogRow.duration = n.getNumberValue() as any ; },
        "endDateTime": n => { directRoutingLogRow.endDateTime = n.getDateValue() as any ; },
        "failureDateTime": n => { directRoutingLogRow.failureDateTime = n.getDateValue() as any ; },
        "finalSipCode": n => { directRoutingLogRow.finalSipCode = n.getNumberValue() as any ; },
        "finalSipCodePhrase": n => { directRoutingLogRow.finalSipCodePhrase = n.getStringValue() as any ; },
        "id": n => { directRoutingLogRow.id = n.getStringValue() as any ; },
        "inviteDateTime": n => { directRoutingLogRow.inviteDateTime = n.getDateValue() as any ; },
        "mediaBypassEnabled": n => { directRoutingLogRow.mediaBypassEnabled = n.getBooleanValue() as any ; },
        "mediaPathLocation": n => { directRoutingLogRow.mediaPathLocation = n.getStringValue() as any ; },
        "@odata.type": n => { directRoutingLogRow.odataType = n.getStringValue() as any ; },
        "signalingLocation": n => { directRoutingLogRow.signalingLocation = n.getStringValue() as any ; },
        "startDateTime": n => { directRoutingLogRow.startDateTime = n.getDateValue() as any ; },
        "successfulCall": n => { directRoutingLogRow.successfulCall = n.getBooleanValue() as any ; },
        "trunkFullyQualifiedDomainName": n => { directRoutingLogRow.trunkFullyQualifiedDomainName = n.getStringValue() as any ; },
        "userDisplayName": n => { directRoutingLogRow.userDisplayName = n.getStringValue() as any ; },
        "userId": n => { directRoutingLogRow.userId = n.getStringValue() as any ; },
        "userPrincipalName": n => { directRoutingLogRow.userPrincipalName = n.getStringValue() as any ; },
    }
}
