import {OnenoteEntityBaseModel} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OnenoteResource extends OnenoteEntityBaseModel, Partial<Parsable> {
    /** The content stream */
    content?: string;
    /** The URL for downloading the content */
    contentUrl?: string;
}
