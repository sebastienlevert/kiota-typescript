import {BaseCollectionPaginationCountResponse, MobileLobApp} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MobileLobAppCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: MobileLobApp[];
}
