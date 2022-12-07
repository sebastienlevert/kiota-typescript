import {ColumnDefinition, ContentTypeInfo, DocumentSetContent} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DocumentSet extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Content types allowed in document set. */
    allowedContentTypes?: ContentTypeInfo[];
    /** Default contents of document set. */
    defaultContents?: DocumentSetContent[];
    /** Indicates whether to add the name of the document set to each file name. */
    propagateWelcomePageChanges?: boolean;
    /** The sharedColumns property */
    sharedColumns?: ColumnDefinition[];
    /** Add the name of the Document Set to each file name. */
    shouldPrefixNameToFile?: boolean;
    /** The welcomePageColumns property */
    welcomePageColumns?: ColumnDefinition[];
    /** Welcome page absolute URL. */
    welcomePageUrl?: string;
}
