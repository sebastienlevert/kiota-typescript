import {TicketInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTicketInfo(writer: SerializationWriter, ticketInfo: TicketInfo | undefined = {}) : void {
            writer.writeStringValue("@odata.type", ticketInfo.odataType);
            writer.writeStringValue("ticketNumber", ticketInfo.ticketNumber);
            writer.writeStringValue("ticketSystem", ticketInfo.ticketSystem);
}
