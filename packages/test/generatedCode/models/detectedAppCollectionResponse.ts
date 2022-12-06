import {BaseCollectionPaginationCountResponse, DetectedApp} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DetectedAppCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DetectedApp[];
}
