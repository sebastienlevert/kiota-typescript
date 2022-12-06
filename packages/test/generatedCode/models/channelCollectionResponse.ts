import {BaseCollectionPaginationCountResponse, Channel} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChannelCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Channel[];
}
