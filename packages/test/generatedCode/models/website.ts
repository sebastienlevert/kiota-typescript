import {WebsiteType} from './websiteType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Website extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The URL of the website. */
    address?: string;
    /** The display name of the web site. */
    displayName?: string;
    /** The type property */
    type?: WebsiteType;
}
