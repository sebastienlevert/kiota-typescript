import {Identity} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SharingLink extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The application property */
    application?: Identity;
    /** The configuratorUrl property */
    configuratorUrl?: string;
    /** If true then the user can only use this link to view the item on the web, and cannot use it to download the contents of the item. Only for OneDrive for Business and SharePoint. */
    preventsDownload?: boolean;
    /** The scope of the link represented by this permission. Value anonymous indicates the link is usable by anyone, organization indicates the link is only usable for users signed into the same tenant. */
    scope?: string;
    /** The type of the link created. */
    type?: string;
    /** For embed links, this property contains the HTML code for an <iframe> element that will embed the item in a webpage. */
    webHtml?: string;
    /** A URL that opens the item in the browser on the OneDrive website. */
    webUrl?: string;
}
