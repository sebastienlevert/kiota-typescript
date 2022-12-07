import {BaseItemVersion} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DriveItemVersion extends BaseItemVersion, Partial<Parsable> {
    /** The content property */
    content?: string;
    /** Indicates the size of the content stream for this version of the item. */
    size?: number;
}
