import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AppListItem extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The application or bundle identifier of the application */
    appId?: string;
    /** The Store URL of the application */
    appStoreUrl?: string;
    /** The application name */
    name?: string;
    /** The OdataType property */
    odataType?: string;
    /** The publisher of the application */
    publisher?: string;
}
