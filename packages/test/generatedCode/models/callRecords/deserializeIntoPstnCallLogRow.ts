import {PstnCallLogRow} from './index';
import {PstnCallDurationSource} from './pstnCallDurationSource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPstnCallLogRow(pstnCallLogRow: PstnCallLogRow | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "callDurationSource": n => { pstnCallLogRow.callDurationSource = n.getEnumValue<PstnCallDurationSource>(PstnCallDurationSource) as any ; },
        "calleeNumber": n => { pstnCallLogRow.calleeNumber = n.getStringValue() as any ; },
        "callerNumber": n => { pstnCallLogRow.callerNumber = n.getStringValue() as any ; },
        "callId": n => { pstnCallLogRow.callId = n.getStringValue() as any ; },
        "callType": n => { pstnCallLogRow.callType = n.getStringValue() as any ; },
        "charge": n => { pstnCallLogRow.charge = n.getNumberValue() as any ; },
        "conferenceId": n => { pstnCallLogRow.conferenceId = n.getStringValue() as any ; },
        "connectionCharge": n => { pstnCallLogRow.connectionCharge = n.getNumberValue() as any ; },
        "currency": n => { pstnCallLogRow.currency = n.getStringValue() as any ; },
        "destinationContext": n => { pstnCallLogRow.destinationContext = n.getStringValue() as any ; },
        "destinationName": n => { pstnCallLogRow.destinationName = n.getStringValue() as any ; },
        "duration": n => { pstnCallLogRow.duration = n.getNumberValue() as any ; },
        "endDateTime": n => { pstnCallLogRow.endDateTime = n.getDateValue() as any ; },
        "id": n => { pstnCallLogRow.id = n.getStringValue() as any ; },
        "inventoryType": n => { pstnCallLogRow.inventoryType = n.getStringValue() as any ; },
        "licenseCapability": n => { pstnCallLogRow.licenseCapability = n.getStringValue() as any ; },
        "@odata.type": n => { pstnCallLogRow.odataType = n.getStringValue() as any ; },
        "operator": n => { pstnCallLogRow.operator = n.getStringValue() as any ; },
        "startDateTime": n => { pstnCallLogRow.startDateTime = n.getDateValue() as any ; },
        "tenantCountryCode": n => { pstnCallLogRow.tenantCountryCode = n.getStringValue() as any ; },
        "usageCountryCode": n => { pstnCallLogRow.usageCountryCode = n.getStringValue() as any ; },
        "userDisplayName": n => { pstnCallLogRow.userDisplayName = n.getStringValue() as any ; },
        "userId": n => { pstnCallLogRow.userId = n.getStringValue() as any ; },
        "userPrincipalName": n => { pstnCallLogRow.userPrincipalName = n.getStringValue() as any ; },
    }
}
