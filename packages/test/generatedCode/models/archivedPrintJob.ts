import {UserIdentity} from './index';
import {PrintJobProcessingState} from './printJobProcessingState';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ArchivedPrintJob extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** True if the job was acquired by a printer; false otherwise. Read-only. */
    acquiredByPrinter?: boolean;
    /** The dateTimeOffset when the job was acquired by the printer, if any. Read-only. */
    acquiredDateTime?: Date;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The dateTimeOffset when the job was completed, canceled or aborted. Read-only. */
    completionDateTime?: Date;
    /** The number of copies that were printed. Read-only. */
    copiesPrinted?: number;
    /** The user who created the print job. Read-only. */
    createdBy?: UserIdentity;
    /** The dateTimeOffset when the job was created. Read-only. */
    createdDateTime?: Date;
    /** The archived print job's GUID. Read-only. */
    id?: string;
    /** The OdataType property */
    odataType?: string;
    /** The printer ID that the job was queued for. Read-only. */
    printerId?: string;
    /** The processingState property */
    processingState?: PrintJobProcessingState;
}
