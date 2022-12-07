import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookWorksheetProtectionOptions extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Represents the worksheet protection option of allowing using auto filter feature. */
    allowAutoFilter?: boolean;
    /** Represents the worksheet protection option of allowing deleting columns. */
    allowDeleteColumns?: boolean;
    /** Represents the worksheet protection option of allowing deleting rows. */
    allowDeleteRows?: boolean;
    /** Represents the worksheet protection option of allowing formatting cells. */
    allowFormatCells?: boolean;
    /** Represents the worksheet protection option of allowing formatting columns. */
    allowFormatColumns?: boolean;
    /** Represents the worksheet protection option of allowing formatting rows. */
    allowFormatRows?: boolean;
    /** Represents the worksheet protection option of allowing inserting columns. */
    allowInsertColumns?: boolean;
    /** Represents the worksheet protection option of allowing inserting hyperlinks. */
    allowInsertHyperlinks?: boolean;
    /** Represents the worksheet protection option of allowing inserting rows. */
    allowInsertRows?: boolean;
    /** Represents the worksheet protection option of allowing using pivot table feature. */
    allowPivotTables?: boolean;
    /** Represents the worksheet protection option of allowing using sort feature. */
    allowSort?: boolean;
}
