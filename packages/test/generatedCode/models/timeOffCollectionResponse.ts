import {BaseCollectionPaginationCountResponse, TimeOff} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TimeOffCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: TimeOff[];
}
