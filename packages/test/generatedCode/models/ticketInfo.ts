import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TicketInfo extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The OdataType property */
    odataType?: string;
    /** The ticket number. */
    ticketNumber?: string;
    /** The description of the ticket system. */
    ticketSystem?: string;
}
