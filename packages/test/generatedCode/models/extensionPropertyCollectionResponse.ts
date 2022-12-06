import {BaseCollectionPaginationCountResponse, ExtensionProperty} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ExtensionPropertyCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ExtensionProperty[];
}
