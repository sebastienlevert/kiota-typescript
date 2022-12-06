import {TicketInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTicketInfo(ticketInfo: TicketInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { ticketInfo.odataType = n.getStringValue() as any ; },
        "ticketNumber": n => { ticketInfo.ticketNumber = n.getStringValue() as any ; },
        "ticketSystem": n => { ticketInfo.ticketSystem = n.getStringValue() as any ; },
    }
}
