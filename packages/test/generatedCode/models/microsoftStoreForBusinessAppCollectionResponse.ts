import {BaseCollectionPaginationCountResponse, MicrosoftStoreForBusinessApp} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MicrosoftStoreForBusinessAppCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: MicrosoftStoreForBusinessApp[];
}
