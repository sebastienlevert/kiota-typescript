import {BaseCollectionPaginationCountResponse, WebApp} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WebAppCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: WebApp[];
}
