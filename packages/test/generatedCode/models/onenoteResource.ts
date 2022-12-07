import {OnenoteEntityBaseModel} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OnenoteResource extends OnenoteEntityBaseModel, Partial<Parsable> {
    /** The content property */
    content?: string;
    /** The contentUrl property */
    contentUrl?: string;
}
