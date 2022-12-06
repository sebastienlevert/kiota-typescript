import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ListInfo extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** If true, indicates that content types are enabled for this list. */
    contentTypesEnabled?: boolean;
    /** If true, indicates that the list is not normally visible in the SharePoint user experience. */
    hidden?: boolean;
    /** The OdataType property */
    odataType?: string;
    /** An enumerated value that represents the base list template used in creating the list. Possible values include documentLibrary, genericList, task, survey, announcements, contacts, and more. */
    template?: string;
}
