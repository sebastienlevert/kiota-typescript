import {BaseCollectionPaginationCountResponse, ExtensionProperty} from '../../../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetAvailableExtensionPropertiesResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ExtensionProperty[];
}
