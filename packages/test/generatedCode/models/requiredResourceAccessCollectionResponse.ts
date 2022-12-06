import {BaseCollectionPaginationCountResponse, RequiredResourceAccess} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RequiredResourceAccessCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: RequiredResourceAccess[];
}
