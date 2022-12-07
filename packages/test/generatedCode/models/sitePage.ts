import {BaseItem, ContentTypeInfo, PublicationFacet, WebPart} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SitePage extends BaseItem, Partial<Parsable> {
    /** The contentType property */
    contentType?: ContentTypeInfo;
    /** The pageLayoutType property */
    pageLayoutType?: string;
    /** The publishingState property */
    publishingState?: PublicationFacet;
    /** The title property */
    title?: string;
    /** The webParts property */
    webParts?: WebPart[];
}
