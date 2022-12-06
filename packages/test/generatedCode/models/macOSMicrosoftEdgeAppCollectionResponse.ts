import {BaseCollectionPaginationCountResponse, MacOSMicrosoftEdgeApp} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MacOSMicrosoftEdgeAppCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: MacOSMicrosoftEdgeApp[];
}
